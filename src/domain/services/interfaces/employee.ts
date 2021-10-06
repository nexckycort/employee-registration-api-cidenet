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
  findByPk: (id: number) => Promise<EmployeeRecord | undefined>
  update: (id: number, newEmployee: NewEmployee) => Promise<EmployeeRecord | null>
  delete: (id: number) => Promise<{ id: number } | null>
}
