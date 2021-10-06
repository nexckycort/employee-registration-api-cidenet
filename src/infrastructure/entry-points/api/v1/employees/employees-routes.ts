import { Router } from 'express'

import { AdaptRoute } from 'app/adapters/express-route-adapter'
import { makeCreateEmployessController, makeGetPaginatedEmployeesController, makeUpdateEmployessController } from 'app/factories/employees'
import { AdaptRouteMiddleware } from 'app/adapters/express-middleware-adapter'
import { validateCreateOrUpdateSchema, validateGetPaginatedSchema } from './employess-schema'

export const employeesRoutes = Router()

employeesRoutes.post('/', ...AdaptRouteMiddleware(validateCreateOrUpdateSchema), AdaptRoute(makeCreateEmployessController()))
employeesRoutes.get('/', ...AdaptRouteMiddleware(validateGetPaginatedSchema), AdaptRoute(makeGetPaginatedEmployeesController()))
employeesRoutes.put('/:id', ...AdaptRouteMiddleware(validateCreateOrUpdateSchema), AdaptRoute(makeUpdateEmployessController()))
