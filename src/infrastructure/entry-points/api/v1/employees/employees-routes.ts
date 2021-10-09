import { Router } from 'express'

import { AdaptRoute } from 'app/adapters/express-route-adapter'
import { makeCreateEmployessController, makeDeleteEmployeesController, makeGetEmployeesController, makeGetPaginatedEmployeesController, makeUpdateEmployessController } from 'app/factories/employees'
import { AdaptRouteMiddleware } from 'app/adapters/express-middleware-adapter'
import { validateCreateOrUpdateSchema, validateGetPaginatedSchema } from './employess-schema'
import { makeIdNumberMiddleware } from '../../middlewares/validate-id-number'

export const employeesRoutes = Router()

employeesRoutes.post('/', ...AdaptRouteMiddleware(validateCreateOrUpdateSchema, makeIdNumberMiddleware()), AdaptRoute(makeCreateEmployessController()))
employeesRoutes.get('/', ...AdaptRouteMiddleware(validateGetPaginatedSchema), AdaptRoute(makeGetPaginatedEmployeesController()))
employeesRoutes.get('/:id', AdaptRoute(makeGetEmployeesController()))
employeesRoutes.put('/:id', ...AdaptRouteMiddleware(validateCreateOrUpdateSchema), AdaptRoute(makeUpdateEmployessController()))
employeesRoutes.delete('/:id', AdaptRoute(makeDeleteEmployeesController()))
