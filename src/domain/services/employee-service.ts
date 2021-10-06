import { Employee, EmployeeRecord, NewEmployee } from 'domain/models/employee-model'
import { EmployeeRepository } from 'infrastructure/repositories/employee-repository'
import { IEmployeeService } from './interfaces/employee'

export class EmployeeService implements IEmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  private readonly snakeCaseEmployeeToCamelCase = (employee: Employee) => {
    const result = {
      id: employee.id,
      firstSurname: employee.first_name,
      secondSurname: employee.second_surname,
      firstName: employee.first_name,
      secondName: employee.second_name,
      country: employee.country,
      IDType: employee.id_type,
      identificationNumber: employee.identification_number,
      area: employee.area,
      entryDate: employee.entry_date as unknown as string,
      email: employee.email,
      state: employee.state,
      registrationDate: employee.registration_date as unknown as string,
      updateDate: employee.update_date as unknown as string
    }
    return result
  }

  create = async (newEmployee: NewEmployee) => {
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

  findByPk = async (id: number) => {
    const employeeRecord = await this.employeeRepository.findOne({
      where: {
        id,
        state: 'A'
      }
    })
    if (employeeRecord === undefined) return
    return this.snakeCaseEmployeeToCamelCase(employeeRecord)
  }

  update = async (id: number, newEmployee: NewEmployee) => {
    const { firstSurname, secondSurname, firstName, secondName, country, IDType, identificationNumber, entryDate, area } = newEmployee

    const alreadyExists = await this.findByPk(+id)
    if (alreadyExists === undefined) return null

    const entryDateObj = new Date(entryDate)
    const employee = new Employee(firstSurname, secondSurname, firstName, country, IDType, identificationNumber, entryDateObj, area, secondName)

    const oldName = `${alreadyExists.firstName}.${alreadyExists.firstSurname}`
    const newName = `${firstName}.${firstSurname}`
    if (oldName === newName) employee.cleanObj()
    else await employee.generateEmail()

    const employeeRecord = await this.employeeRepository.update({
      o: employee,
      where: {
        id
      }
    })

    const result = this.snakeCaseEmployeeToCamelCase(employeeRecord)
    return result
  }

  delete = async (id: number) => {
    const employeeRecord = await this.employeeRepository.update({
      o: {
        state: 'I'
      },
      where: {
        id,
        state: 'A'
      }
    })
    if (employeeRecord === undefined) return null
    return { id: employeeRecord.id }
  }
}
