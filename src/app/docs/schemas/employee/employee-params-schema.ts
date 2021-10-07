export const employeeParamsSchema = {
  type: 'object',
  properties: {
    firstSurname: {
      type: 'string'
    },
    secondSurname: {
      type: 'string'
    },
    firstName: {
      type: 'string'
    },
    secondName: {
      type: 'string',
      format: 'nullable'
    },
    country: {
      type: 'integer',
      format: 'int32'
    },
    IDType: {
      type: 'integer',
      format: 'int32'
    },
    identificationNumber: {
      type: 'string'
    },
    entryDate: {
      type: 'string',
      format: 'date'
    },
    area: {
      type: 'integer',
      format: 'int32'
    }
  },
  required: ['email', 'password']
}
