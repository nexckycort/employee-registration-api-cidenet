import { EmployeeService } from 'domain/services/employee-service'
import { EmployeesController } from 'infrastructure/entry-points/api/v1/employees'
import { EmployeeRepository } from 'infrastructure/repositories/employee-repository'

export const makeEmployessController = (): EmployeesController => {
  const employeeRepository = new EmployeeRepository()
  const employeeService = new EmployeeService(employeeRepository)
  const employeesController = new EmployeesController(employeeService)
  return employeesController
}
