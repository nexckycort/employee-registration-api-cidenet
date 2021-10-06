export class Session {
  id!: number
  constructor(readonly user_id: number, readonly token: string, public expired: Date) {}
}

export interface NewSession {
  userId: number
  token: string
}
