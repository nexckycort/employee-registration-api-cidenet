import { NewUser, User } from 'domain/models/user-model'

export interface IUserService {
  create: (newUser: NewUser) => Promise<User>
  findByPersonId: (personId: number) => Promise<User>
  findByPk: (id: number) => Promise<{
    id: number
    name: string
    email: string
    password: string
    role_id: number
    salt: string
  }>
  findByEmail: (email: string) => Promise<{
    id: number
    name: string
    email: string
    password: string
    role_id: number
    salt: string
  }>
}
