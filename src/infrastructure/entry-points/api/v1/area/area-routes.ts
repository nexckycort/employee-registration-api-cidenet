import { Router } from 'express'

import { AdaptRoute } from 'app/adapters/express-route-adapter'
import { makeAreaController } from 'app/factories/area'

export const areaRoutes = Router()

areaRoutes.get('/', AdaptRoute(makeAreaController()))
