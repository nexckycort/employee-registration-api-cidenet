export const employeeSchema = {
  type: 'object',
  properties: {
    message: {
      type: 'string'
    },
    statusCode: {
      type: 'string'
    },
    data: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int32'
        },
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
        area: {
          type: 'integer',
          format: 'int32'
        },
        entryDate: {
          type: 'string'
        },
        email: {
          type: 'string'
        },
        state: {
          type: 'string'
        },
        registrationDate: {
          type: 'string'
        },
        updateDate: {
          type: 'string'
        }
      }
    }
  }
}

export const employeesPaginatedSchema = {
  type: 'object',
  properties: {
    message: {
      type: 'string'
    },
    statusCode: {
      type: 'string'
    },
    data: {
      type: 'object',
      properties: {
        page: {
          type: 'integer',
          format: 'int32'
        },
        totalPages: {
          type: 'integer',
          format: 'int32'
        },
        totalItems: {
          type: 'integer',
          format: 'int32'
        },
        items: {
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
              },
              country: {
                type: 'string'
              },
              IDType: {
                type: 'string'
              },
              identificationNumber: {
                type: 'string'
              },
              email: {
                type: 'string'
              },
              entryDate: {
                type: 'string'
              },
              area: {
                type: 'string'
              },
              state: {
                type: 'string'
              },
              registrationDate: {
                type: 'string'
              },
              updateDate: {
                type: 'string'
              }
            }
          }
        }
      }
    }
  }
}
// response
