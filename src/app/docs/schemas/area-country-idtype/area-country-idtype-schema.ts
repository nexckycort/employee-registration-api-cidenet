export const areaCountryIdtypeSchema = {
  type: 'object',
  properties: {
    message: {
      type: 'string'
    },
    statusCode: {
      type: 'string'
    },
    data: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int32'
          },
          name: {
            type: 'string'
          }
        }
      }
    }
  }
}

// response
