import { ok, serverError, badRequest } from 'infrastructure/entry-points/api/helpers/api-response'
import { HttpRequest, HttpResponse, Controller } from './employees-protocols'
import { Logger } from 'infrastructure/helpers/logger'
import { IEmployeeService } from 'domain/services/interfaces/employee'
import { InvalidParamError, NoAlReadyExist } from '../../errors'

export class CreateEmployeesController implements Controller {
  constructor(private readonly employeeService: IEmployeeService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const newEmployee = httpRequest.body
      const employee = await this.employeeService.create(newEmployee)
      return ok({ message: 'employee registered successfully', data: employee })
    } catch (error) {
      Logger.error('EmployeesController CreateEmployeesController', error)
      return serverError(error)
    }
  }
}

export class GetPaginatedEmployeesController implements Controller {
  constructor(private readonly employeeService: IEmployeeService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { page, limit } = httpRequest.query
      const employees = await this.employeeService.getPaginated(+page, +limit)
      return ok({ message: 'employees obtained', data: employees })
    } catch (error) {
      Logger.error('EmployeesController GetPaginatedEmployeesController', error)
      return serverError(error)
    }
  }
}

export class GetEmployeesController implements Controller {
  constructor(private readonly employeeService: IEmployeeService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      if (isNaN(id)) return badRequest(new InvalidParamError(id))

      const employee = await this.employeeService.findByPk(+id)

      if (employee === undefined) return badRequest(new NoAlReadyExist(`${+id}`))

      return ok({ message: 'employee obtained', data: employee })
    } catch (error) {
      Logger.error('EmployeesController GetEmployeesController', error)
      return serverError(error)
    }
  }
}

export class UpdateEmployeesController implements Controller {
  constructor(private readonly employeeService: IEmployeeService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const newEmployee = httpRequest.body

      if (isNaN(id)) return badRequest(new InvalidParamError(id))

      const employee = await this.employeeService.update(+id, newEmployee)

      if (employee === null) return badRequest(new NoAlReadyExist(`${+id}`))

      return ok({ message: 'updated employee', data: employee })
    } catch (error) {
      Logger.error('EmployeesController UpdateEmployeesController', error)
      return serverError(error)
    }
  }
}

export class DeleteEmployeesController implements Controller {
  constructor(private readonly employeeService: IEmployeeService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params

      if (isNaN(id)) return badRequest(new InvalidParamError(id))

      const employee = await this.employeeService.delete(+id)

      if (employee === null) return badRequest(new NoAlReadyExist(`${+id}`))

      return ok({ message: 'eliminated employee', data: employee })
    } catch (error) {
      Logger.error('EmployeesController DeleteEmployeesController', error)
      return serverError(error)
    }
  }
}
