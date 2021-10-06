import { Validator } from 'infrastructure/lib/validator'
import validator from '../../middlewares/validator'

const namesValidation = Validator.string()
  .min(3)
  .max(20)
  .regex(/^[A-Z]+$/i)

const numberValidation = Validator.number().min(1).required()

const employeeSchema = Validator.object().keys({
  firstSurname: namesValidation.required(),
  secondSurname: namesValidation.required(),
  firstName: namesValidation.required(),
  secondName: namesValidation.allow(null),
  country: numberValidation,
  IDType: numberValidation,
  identificationNumber: Validator.string().alphanum().min(6).max(20).required(),
  entryDate: Validator.date().iso().required(),
  area: numberValidation
})

export const validateSchema = validator(employeeSchema)