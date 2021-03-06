import { api } from 'app/config/environment'
import { serverError, badRequest, unauthorized } from './components'
import { signupParamsSchema } from './schemas/signup/signup-params-schema'
import { signupSchema } from './schemas/signup/signup-schema'
import { signupPath } from './signup-path'
import { loginPath } from './login-path'
import { loginParamsSchema } from './schemas/login/login-params-schema'
import { loginSchema } from './schemas/login/login-schema'
import { errorSchema } from './schemas/error/error-schema'
import { validateTokenPath } from './validate-token-path'
import { validateTokenSchema } from './schemas/validate-token/validate-token-schema'
import { employeeSchema, employeesPaginatedSchema } from './schemas/employee/employee-schema'
import { employeeParamsSchema } from './schemas/employee/employee-params-schema'
import { employeePath, employeeUpdatePath } from './employee-path'
import { areaCountryIdtypeSchema } from './schemas/area-country-idtype/area-country-idtype-schema'
import { areaCountryIdtypePath } from './area-country-idtype-path'

export default {
  openapi: '3.0.0',
  info: {
    title: 'API Employee Registration Cidenet',
    description: 'API - Nestor Cortina',
    version: '1.0.0'
  },
  servers: [
    {
      url: api.prefixV1
    }
  ],
  tags: [{ name: 'Login' }, { name: 'Employee' }, { name: 'Others' }],
  paths: {
    '/signup': signupPath, // route
    '/login': loginPath, // route
    '/validate-token': validateTokenPath, // route
    '/employees': employeePath, // route
    '/employees/{employeeId}': employeeUpdatePath, // route
    '/areas': areaCountryIdtypePath, // route
    '/countrys': areaCountryIdtypePath, // route
    '/id-types': areaCountryIdtypePath // route
  },
  schemas: {
    signup: signupSchema, // response
    signupParams: signupParamsSchema, // request

    login: loginSchema, // response
    loginParams: loginParamsSchema, // request

    validateToken: validateTokenSchema, // response

    employee: employeeSchema, // response
    employeeParams: employeeParamsSchema, // request

    employeesPaginated: employeesPaginatedSchema, // response

    areaCountryIdtype: areaCountryIdtypeSchema, // response

    error: errorSchema
  },
  components: {
    badRequest,
    serverError,
    unauthorized
  }
}
