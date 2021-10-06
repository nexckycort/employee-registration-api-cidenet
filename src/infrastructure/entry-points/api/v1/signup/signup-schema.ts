import { Validator } from 'infrastructure/lib/validator'

export const schemaSignup = Validator.object().keys({
  personId: Validator.number().required(),
  password: Validator.string().min(6).max(30).required(),
  role: Validator.number().required()
})
