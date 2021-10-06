import { EmployeeService } from 'domain/services/employee-service'
import { CreateEmployeesController } from 'infrastructure/entry-points/api/v1/employees'
import { GetPaginatedEmployeesController, UpdateEmployeesController } from 'infrastructure/entry-points/api/v1/employees/employees-controller'
import { EmployeeRepository } from 'infrastructure/repositories/employee-repository'

export const makeCreateEmployessController = (): CreateEmployeesController => {
  const employeeRepository = new EmployeeRepository()
  const employeeService = new EmployeeService(employeeRepository)
  const createEmployeesController = new CreateEmployeesController(employeeService)
  return createEmployeesController
}

export const makeGetPaginatedEmployeesController = (): GetPaginatedEmployeesController => {
  const employeeRepository = new EmployeeRepository()
  const employeeService = new EmployeeService(employeeRepository)
  const getPaginatedEmployeesController = new GetPaginatedEmployeesController(employeeService)
  return getPaginatedEmployeesController
}

export const makeUpdateEmployessController = (): UpdateEmployeesController => {
  const employeeRepository = new EmployeeRepository()
  const employeeService = new EmployeeService(employeeRepository)
  const updateEmployeesController = new UpdateEmployeesController(employeeService)
  return updateEmployeesController
}
