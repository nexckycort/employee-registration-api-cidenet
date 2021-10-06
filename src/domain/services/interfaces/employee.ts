import { Employee, NewEmployee } from 'domain/models/employee-model'

export interface IEmployeeService {
  create: (newEmployee: NewEmployee) => Promise<Employee>
}
