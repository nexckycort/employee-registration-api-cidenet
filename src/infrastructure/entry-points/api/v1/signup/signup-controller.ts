import { badRequest, ok, serverError } from 'infrastructure/entry-points/api/helpers/api-response'
import { HttpRequest, HttpResponse, Controller } from './signup-protocols'
import { AlReadyExist } from '../../errors'
import { Logger } from 'infrastructure/helpers/logger'
import { IUserService } from 'domain/services/interfaces/user'

export class SignupController implements Controller {
  constructor(private readonly userService: IUserService) {
    this.userService = userService
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { personId, password, role } = httpRequest.body

      const userAlReadyExist = await this.userService.findByPersonId(personId)
      if (userAlReadyExist !== undefined) {
        return badRequest(new AlReadyExist(personId))
      }

      await this.userService.create({ personId, password, role })
      return ok({ message: 'Successful registration' })
    } catch (error) {
      Logger.error('SignupController', error)
      return serverError(error)
    }
  }
}
