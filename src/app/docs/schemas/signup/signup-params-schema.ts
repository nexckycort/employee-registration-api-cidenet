export const signupParamsSchema = {
  type: 'object',
  properties: {
    personId: {
      type: 'number'
    },
    password: {
      type: 'string'
    },
    role: {
      type: 'number'
    }
  },
  required: ['personId', 'password', 'role']
}

// request
