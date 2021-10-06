import { AuthenticationToken } from 'domain/interfaces/jwt-token'
import { EncryptionAdapter } from 'domain/interfaces/encryption'
import { Auth } from 'domain/models/authentication-model'
import { IAuthenticationService } from './interfaces/authentication'
import { ISessionService } from './interfaces/session'
import { IUserService } from './interfaces/user'

export class AuthenticationService implements IAuthenticationService {
  constructor(private readonly userService: IUserService, private readonly encryptionAdapter: EncryptionAdapter, private readonly jwtAdapter: AuthenticationToken, private readonly sessionService: ISessionService) {}

  async auth(email: string, password: string): Promise<Auth | null> {
    const userAlReadyExist = await this.userService.findByEmail(email)
    if (userAlReadyExist === undefined) return null

    const isPassCorret = await this.encryptionAdapter.decrypt(password, userAlReadyExist.password, userAlReadyExist.salt)
    if (isPassCorret === false) return null

    const token = await this.jwtAdapter.token({ id: userAlReadyExist.id })

    await this.sessionService.create({
      userId: userAlReadyExist.id,
      token
    })

    return {
      user: {
        name: userAlReadyExist.name,
        email: userAlReadyExist.email
      },
      token
    }
  }
}
