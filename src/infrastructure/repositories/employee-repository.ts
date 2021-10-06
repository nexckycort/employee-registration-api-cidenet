import { BaseRepository } from 'infrastructure/repositories/base/base-repository'
import { Employee } from 'domain/models/employee-model'

export class EmployeeRepository extends BaseRepository<Employee> {
  constructor() {
    super('employees')
  }

  getNumberEmail = async (nameEmail: string) => {
    const { rows } = await this.db.query<{ id_email: number }>(`select count(id) id_email
      from employees e
      where email like '%${nameEmail}%'`)

    const idEmail = +rows[0].id_email
    return idEmail === 0 ? '' : `.${idEmail}`
  }
}
