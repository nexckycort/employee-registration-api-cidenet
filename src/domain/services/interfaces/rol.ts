export interface IRoleService {
  validate: (rol: number) => Promise<boolean>
}
