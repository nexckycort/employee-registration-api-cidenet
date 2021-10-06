import { Validator } from 'infrastructure/lib/validator'
import validator, { ValidationSource } from '../../middlewares/validator'

const namesValidation = Validator.string()
  .min(3)
  .max(20)
  .regex(/^[A-Z]+$/i)

const numberValidation = Validator.number().min(1).required()

const createOrUpdateSchema = Validator.object().keys({
  firstSurname: namesValidation.required(),
  secondSurname: namesValidation.required(),
  firstName: namesValidation.required(),
  secondName: namesValidation.allow(null),
  country: numberValidation,
  IDType: numberValidation,
  identificationNumber: Validator.string().alphanum().min(6).max(20).required(),
  // TODO: no puede ser superior a la fecha actual y menor hasta un mes
  entryDate: Validator.date().iso().required(),
  area: numberValidation
})

const getPaginatedSchema = Validator.object().keys({
  page: Validator.number().min(1).required(),
  limit: Validator.number().min(1).required()
})

export const validateCreateOrUpdateSchema = validator(createOrUpdateSchema)
export const validateGetPaginatedSchema = validator(getPaginatedSchema, ValidationSource.QUERY)
