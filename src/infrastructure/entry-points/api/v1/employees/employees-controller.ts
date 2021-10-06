import { ok, serverError } from 'infrastructure/entry-points/api/helpers/api-response'
import { HttpRequest, HttpResponse, Controller } from './employees-protocols'
import { Logger } from 'infrastructure/helpers/logger'
import { IEmployeeService } from 'domain/services/interfaces/employee'

export class CreateEmployeesController implements Controller {
  constructor(private readonly employeeService: IEmployeeService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const newEmployee = httpRequest.body
      const employee = await this.employeeService.create(newEmployee)
      return ok({ message: 'employee registered successfully', data: employee })
    } catch (error) {
      Logger.error('EmployeesController', error)
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
      return ok({ message: 'downloaded employees', data: employees })
    } catch (error) {
      Logger.error('EmployeesController', error)
      return serverError(error)
    }
  }
}
