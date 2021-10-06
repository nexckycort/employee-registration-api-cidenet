import { Router } from 'express'

import { AdaptRoute } from 'app/adapters/express-route-adapter'
import { makeCreateEmployessController, makeGetPaginatedEmployeesController } from 'app/factories/employees'
import { AdaptRouteMiddleware } from 'app/adapters/express-middleware-adapter'
import { validateCreateSchema, validateGetPaginatedSchema } from './employess-schema'

export const employeesRoutes = Router()

employeesRoutes.post('/', ...AdaptRouteMiddleware(validateCreateSchema), AdaptRoute(makeCreateEmployessController()))
employeesRoutes.get('/', ...AdaptRouteMiddleware(validateGetPaginatedSchema), AdaptRoute(makeGetPaginatedEmployeesController()))
