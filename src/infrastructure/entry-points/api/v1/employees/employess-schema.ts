import { Validator } from 'infrastructure/lib/validator'
import validator, { ValidationSource } from '../../middlewares/validator'

const namesValidation = Validator.string()
  .min(3)
  .max(20)
  .regex(/^[A-Z]+$/i)

const lastNamesValidation = Validator.string()
  .min(3)
  .max(20)
  .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ /s]*$/)

const numberValidation = Validator.number().min(1).required()

const dateDifferenceMonth = () => {
  const currentDate = new Date()
  return new Date().setMonth(currentDate.getMonth() - 1)
}

const createOrUpdateSchema = Validator.object().keys({
  firstSurname: lastNamesValidation.required(),
  secondSurname: lastNamesValidation.required(),
  firstName: namesValidation.required(),
  secondName: namesValidation.allow(null),
  country: numberValidation,
  IDType: numberValidation,
  identificationNumber: Validator.string().alphanum().min(6).max(20).required(),
  entryDate: Validator.date().iso().min(dateDifferenceMonth()).max('now').required(),
  area: numberValidation
})

const getPaginatedSchema = Validator.object().keys({
  page: Validator.number().min(1).required(),
  limit: Validator.number().min(1).required()
})

export const validateCreateOrUpdateSchema = validator(createOrUpdateSchema)
export const validateGetPaginatedSchema = validator(getPaginatedSchema, ValidationSource.QUERY)
