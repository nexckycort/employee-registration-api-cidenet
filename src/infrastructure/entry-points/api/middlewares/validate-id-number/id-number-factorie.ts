import { EmployeeRepository } from 'infrastructure/repositories/employee-repository'
import { EmployeeService } from 'domain/services/employee-service'
import { IdNumberMiddleware } from './id-number-middleware'

export const makeIdNumberMiddleware = (): IdNumberMiddleware => {
  const employeeRepository = new EmployeeRepository()
  const employeeService = new EmployeeService(employeeRepository)
  const idNumberMiddleware = new IdNumberMiddleware(employeeService)
  return idNumberMiddleware
}
