import { Router } from 'express'

import { AdaptRoute } from 'app/adapters/express-route-adapter'
import { makeIdTypeController } from 'app/factories/id-type'

export const idTypesRoutes = Router()

idTypesRoutes.get('/', AdaptRoute(makeIdTypeController()))
