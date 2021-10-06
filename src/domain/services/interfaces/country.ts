export interface ICountryService {
  validate: (country: number) => Promise<boolean>
}
