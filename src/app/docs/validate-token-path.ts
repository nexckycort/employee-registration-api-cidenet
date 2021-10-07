export const validateTokenPath = {
  get: {
    tags: ['Login'],
    summary: 'endpoint to validate token',
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
              $ref: '#/schemas/validateToken'
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
