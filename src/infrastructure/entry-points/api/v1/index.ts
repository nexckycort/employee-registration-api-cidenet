import { Router } from 'express'

import { loginRoutes } from 'infrastructure/entry-points/api/v1/login'
import { signupRoutes } from 'infrastructure/entry-points/api/v1/signup'
import { validateTokenRoutes } from 'infrastructure/entry-points/api/v1/validate-token'
import { areaRoutes } from 'infrastructure/entry-points/api/v1/area'
import { countryRoutes } from 'infrastructure/entry-points/api/v1/country'
import { idTypesRoutes } from 'infrastructure/entry-points/api/v1/id-type'
import { employeesRoutes } from 'infrastructure/entry-points/api/v1/employees'

export const routerV1 = Router({ caseSensitive: true })

routerV1.use('/login', loginRoutes)
routerV1.use('/signup', signupRoutes)
routerV1.use('/validate-token', validateTokenRoutes)
routerV1.use('/areas', areaRoutes)
routerV1.use('/countrys', countryRoutes)
routerV1.use('/id-types', idTypesRoutes)
routerV1.use('/employees', employeesRoutes)
