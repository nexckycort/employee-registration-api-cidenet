export interface IAreaService {
  validate: (area: number) => Promise<boolean>
}
