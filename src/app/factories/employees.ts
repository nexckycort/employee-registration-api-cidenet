import { EmployeeService } from 'domain/services/employee-service'
import { CreateEmployeesController } from 'infrastructure/entry-points/api/v1/employees'
import { GetPaginatedEmployeesController } from 'infrastructure/entry-points/api/v1/employees/employees-controller'
import { EmployeeRepository } from 'infrastructure/repositories/employee-repository'

export const makeCreateEmployessController = (): CreateEmployeesController => {
  const employeeRepository = new EmployeeRepository()
  const employeeService = new EmployeeService(employeeRepository)
  const employeesController = new CreateEmployeesController(employeeService)
  return employeesController
}

export const makeGetPaginatedEmployeesController = (): GetPaginatedEmployeesController => {
  const employeeRepository = new EmployeeRepository()
  const employeeService = new EmployeeService(employeeRepository)
  const employeesController = new GetPaginatedEmployeesController(employeeService)
  return employeesController
}
