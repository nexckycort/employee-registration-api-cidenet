import { BaseRepository } from 'infrastructure/repositories/base/base-repository'
import { Session } from 'domain/models/session-model'

export class SessionRepository extends BaseRepository<Session> {
  constructor() {
    super('sessions')
  }

  async findByUserId(userId: string): Promise<Session> {
    const sessionRecord = await this.findOne({
      where: {
        user_id: userId
      }
    })
    return sessionRecord
  }

  async findByToken(token: string): Promise<Session> {
    const sessionRecord = await this.findOne({
      where: {
        token
      }
    })
    return sessionRecord
  }

  async updateByPk(id: number, item: Session): Promise<Session> {
    const sessionRecord = await this.update({
      o: item,
      where: { id }
    })
    return sessionRecord
  }
}
