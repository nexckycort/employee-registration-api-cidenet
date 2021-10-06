import { Router } from 'express'

import { AdaptRoute } from 'app/adapters/express-route-adapter'
import { makeCountryController } from 'app/factories/country'

export const countryRoutes = Router()

countryRoutes.get('/', AdaptRoute(makeCountryController()))
