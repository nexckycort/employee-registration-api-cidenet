import { UserRepository } from 'infrastructure/repositories/user-repository'
import { EncryptionAdapter } from 'domain/interfaces/encryption'
import { User, NewUser } from 'domain/models/user-model'
import { IUserService } from './interfaces/user'

export class UserService implements IUserService {
  constructor(private readonly encryptionAdapter: EncryptionAdapter, private readonly userRepository: UserRepository) {}

  async create(newUser: NewUser): Promise<User> {
    const { personId, password, role } = newUser
    const passwordHash = await this.encryptionAdapter.encrypt(password)
    const user = new User(personId, passwordHash, role, this.encryptionAdapter.saltText)
    const userRecord = await this.userRepository.create(user)
    return userRecord
  }

  async findByPersonId(personId: number): Promise<User> {
    return await this.userRepository.findByPersonId(personId)
  }

  async findByPk(id: number) {
    return await this.userRepository.findByPk(id)
  }

  async findByEmail(email: string) {
    return await this.userRepository.findByEmail(email)
  }
}
