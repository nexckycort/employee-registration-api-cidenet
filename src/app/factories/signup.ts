import { SignupController } from 'infrastructure/entry-points/api/v1/signup'
import { EncryptionAdapter } from 'infrastructure/adapters/encryption-adapter'
import { UserRepository } from 'infrastructure/repositories/user-repository'
import { UserService } from 'domain/services/user-service'
import { rijndaelKey } from 'app/config/environment'

export const makeSignupController = (): SignupController => {
  const encryptionAdapter = new EncryptionAdapter(10, rijndaelKey)
  const userRepository = new UserRepository()
  const userService = new UserService(encryptionAdapter, userRepository)
  const signupController = new SignupController(userService)
  return signupController
}
