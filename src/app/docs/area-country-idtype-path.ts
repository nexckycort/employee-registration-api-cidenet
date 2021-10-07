export const areaCountryIdtypePath = {
  get: {
    tags: ['Others'],
    summary: 'endpoint to find all',
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
              $ref: '#/schemas/areaCountryIdtype'
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
