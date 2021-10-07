export const employeePath = {
  post: {
    tags: ['Employee'],
    summary: 'endpoint to create employee',
    parameters: [
      {
        in: 'header',
        name: 'Authorization',
        description: 'token',
        required: true,
        type: 'string'
      }
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/employeeParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/employee'
            }
          }
        }
      },
      401: {
        $ref: '#/components/unauthorized'
      },
      404: {
        $ref: '#/components/badRequest'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  },
  get: {
    tags: ['Employee'],
    summary: 'endpoint to get paginated employees',
    parameters: [
      {
        in: 'header',
        name: 'Authorization',
        description: 'token',
        required: true,
        type: 'string'
      },
      {
        in: 'query',
        name: 'page',
        description: 'page',
        required: true,
        type: 'number'
      },
      {
        in: 'query',
        name: 'limit',
        description: 'limit',
        required: true,
        type: 'number'
      }
    ],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/employeesPaginated'
            }
          }
        }
      },
      401: {
        $ref: '#/components/unauthorized'
      },
      404: {
        $ref: '#/components/badRequest'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}

export const employeeUpdatePath = {
  get: {
    tags: ['Employee'],
    summary: 'endpoint to get employee by id',
    parameters: [
      {
        in: 'header',
        name: 'Authorization',
        description: 'token',
        required: true,
        type: 'string'
      }
    ],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/employee'
            }
          }
        }
      },
      401: {
        $ref: '#/components/unauthorized'
      },
      404: {
        $ref: '#/components/badRequest'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  },
  put: {
    tags: ['Employee'],
    summary: 'endpoint to update employee',
    parameters: [
      {
        in: 'header',
        name: 'Authorization',
        description: 'token',
        required: true,
        type: 'string'
      }
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/employeeParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/employee'
            }
          }
        }
      },
      401: {
        $ref: '#/components/unauthorized'
      },
      404: {
        $ref: '#/components/badRequest'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  },
  delete: {
    tags: ['Employee'],
    summary: 'endpoint to delete employee',
    parameters: [
      {
        in: 'header',
        name: 'Authorization',
        description: 'token',
        required: true,
        type: 'string'
      }
    ],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/employee'
            }
          }
        }
      },
      401: {
        $ref: '#/components/unauthorized'
      },
      404: {
        $ref: '#/components/badRequest'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
