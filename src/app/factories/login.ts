import { AuthenticationService } from 'domain/services/authentication-service'
import { LoginController } from 'infrastructure/entry-points/api/v1/login'
import { EncryptionAdapter } from 'infrastructure/adapters/encryption-adapter'
import { UserRepository } from 'infrastructure/repositories/user-repository'
import { JwtAdapter } from 'infrastructure/adapters/jwt-adapter'
import { rijndaelKey, token } from 'app/config/environment'
import { UserService } from 'domain/services/user-service'
import { SessionRepository } from 'infrastructure/repositories/session-repository'
import { SessionService } from 'domain/services/session-service'

export const makeLoginController = (): LoginController => {
  const encryptionAdapter = new EncryptionAdapter(10, rijndaelKey)
  const userRepository = new UserRepository()
  const userService = new UserService(encryptionAdapter, userRepository)
  const jwtAdapter = new JwtAdapter(token.seed)
  const sessionRepository = new SessionRepository()
  const sessionService = new SessionService(sessionRepository, userService, token.expiresIn)
  const authenticationService = new AuthenticationService(userService, encryptionAdapter, jwtAdapter, sessionService)
  const loginController = new LoginController(authenticationService)
  return loginController
}
