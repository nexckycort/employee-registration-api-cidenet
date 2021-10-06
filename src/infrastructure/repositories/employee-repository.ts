import { BaseRepository } from 'infrastructure/repositories/base/base-repository'
import { Employee, EmployeeRecord } from 'domain/models/employee-model'

export class EmployeeRepository extends BaseRepository<Employee> {
  constructor() {
    super('employees')
  }

  getPaginated = async (page: number, limit: number) => {
    const newPage = page === 1 ? 0 : page - 1

    const { rows } = await this.db.query<EmployeeRecord>(`select e.id, concat(e.first_name, ' ', e.second_name, ' ', e.first_surname, ' ', e.second_surname) as name, 
      c."name" as country, it."name" as id_type, identification_number, email, entry_date, a."name" as area, 
      state, registration_date
      from employees e
      inner join countrys c on e.country = c.id
      inner join id_types it on e.id_type = it.id
      inner join areas a on e.area = a.id
      order by e.id
      limit ${limit} offset (${newPage} * ${limit})`)
    return rows
  }

  getNumberEmail = async (nameEmail: string) => {
    const { rows } = await this.db.query<{ id_email: number }>(`select count(id) id_email
      from employees e
      where email like '%${nameEmail}%'`)

    const idEmail = +rows[0].id_email
    return idEmail === 0 ? '' : `.${idEmail}`
  }
}
