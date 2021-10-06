import { Employee, NewEmployee } from 'domain/models/employee-model'
import { EmployeeRepository } from 'infrastructure/repositories/employee-repository'
import { IEmployeeService } from './interfaces/employee'

export class EmployeeService implements IEmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async create(newEmployee: NewEmployee) {
    const { firstSurname, secondSurname, firstName, secondName, country, IDType, identificationNumber, entryDate, area } = newEmployee

    const entryDateObj = new Date(entryDate)
    const employee = new Employee(firstSurname, secondSurname, firstName, country, IDType, identificationNumber, entryDateObj, area, secondName)
    await employee.generateEmail()

    const employeeRecord = await this.employeeRepository.create(employee)
    return employeeRecord
  }
}
