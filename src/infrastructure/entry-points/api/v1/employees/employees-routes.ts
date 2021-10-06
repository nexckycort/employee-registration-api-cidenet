import { Router } from 'express'

import { AdaptRoute } from 'app/adapters/express-route-adapter'
import { makeEmployessController } from 'app/factories/employees'
import { AdaptRouteMiddleware } from 'app/adapters/express-middleware-adapter'
import { validateSchema } from './employess-schema'

export const employeesRoutes = Router()

employeesRoutes.post('/', ...AdaptRouteMiddleware(validateSchema), AdaptRoute(makeEmployessController()))
