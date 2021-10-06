import { Employee, EmployeeRecord, NewEmployee } from 'domain/models/employee-model'

export interface IEmployeeService {
  create: (newEmployee: NewEmployee) => Promise<Employee>
  getPaginated: (
    page: number,
    limit: number
  ) => Promise<{
    page: number
    totalPages: number
    totalItems: unknown
    items: EmployeeRecord[]
  }>
}
