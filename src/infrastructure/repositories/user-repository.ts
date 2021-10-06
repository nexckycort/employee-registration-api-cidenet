import { BaseRepository } from 'infrastructure/repositories/base/base-repository'
import { User } from 'domain/models/user-model'

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super('users')
  }

  async findByPersonId(personId: number) {
    const userRecord = await this.findOne({
      where: {
        person_id: personId
      }
    })
    return userRecord
  }

  async findByPk(id: number) {
    const { rows } = await this.db.query(
      `select u.id, concat(p.first_name, ' ', p.first_surname) as name, p.email,
      u."password", u.role_id, u.salt
      from users u
      inner join persons p on u.person_id = p.id 
      where u.id = $1`,
      [id]
    )
    return rows[0]
  }

  async findByEmail(email: string) {
    const { rows } = await this.db.query(
      `select u.id, concat(p.first_name, ' ', p.first_surname) as name, p.email,
      u."password", u.role_id, u.salt
      from users u
      inner join persons p on u.person_id = p.id 
      where p.email = $1`,
      [email]
    )
    return rows[0]
  }
}
