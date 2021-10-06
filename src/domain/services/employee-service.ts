import { Employee, EmployeeRecord, NewEmployee } from 'domain/models/employee-model'
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

  getPaginated = async (page: number, limit: number) => {
    const consult = []

    consult.push(this.employeeRepository.count())
    consult.push(this.employeeRepository.getPaginated(page, limit))

    const [countEmployeesRecord, employeeRecords]: any = await Promise.all(consult as any)

    if (employeeRecords.length === 0) {
      return {
        page: 0,
        totalPages: 0,
        totalItems: 0,
        items: []
      }
    }

    return {
      page,
      totalPages: Math.ceil((countEmployeesRecord as number) / limit),
      totalItems: countEmployeesRecord,
      items: employeeRecords as EmployeeRecord[]
    }
  }
}
