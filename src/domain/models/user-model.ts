export class User {
  public id!: number
  constructor(readonly person_id: number, readonly password: string, readonly role_id: number, readonly salt: string) {}
}

export interface NewUser {
  personId: number
  password: string
  role: number
}
