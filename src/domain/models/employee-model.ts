import { EmployeeRepository } from 'infrastructure/repositories/employee-repository'
import { emailDomain } from 'app/config/environment'

export interface NewEmployee {
  firstSurname: string
  secondSurname: string
  firstName: string
  secondName?: string
  country: number
  IDType: number
  identificationNumber: string
  area: number
  entryDate: string
}

export interface EmployeeRecord {
  id: number
  first_surname: string
  second_surname: string
  first_name: string
  second_name?: any
  country: number
  id_type: number
  identification_number: string
  email: string
  entry_date: string
  area: number
  state: string
  registration_date: string
}

export class Employee {
  readonly id!: number
  readonly state!: string
  readonly registration_date!: Date
  private email!: string
  constructor(
    readonly first_surname: string,
    readonly second_surname: string,
    readonly first_name: string,
    readonly country: number,
    readonly id_type: number,
    readonly identification_number: string,
    readonly entry_date: Date,
    readonly area: number,
    readonly second_name: string | undefined | null,
    private readonly employeeRepository = new EmployeeRepository()
  ) {
    this.second_name = second_name ?? null
    this.state = 'A'
    this.registration_date = new Date()
  }

  generateEmail = async () => {
    const firstName = this.first_name.toLowerCase()
    const firstSurname = this.first_surname.toLowerCase().replace(/ /g, '')
    const nameEmail = `${firstName}.${firstSurname}`

    const numberEmail = await this.employeeRepository.getNumberEmail(nameEmail)

    const email = `${nameEmail}${numberEmail}@${emailDomain}`
    this.email = email
    Reflect.deleteProperty(this, 'employeeRepository')
    Reflect.deleteProperty(this, 'generateEmail')
  }
}
