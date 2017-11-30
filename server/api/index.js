import { Router } from 'express'

import users from './users'
import user from './user'

const router = Router()

// Add USERS Routes
router.use(users)
router.use(user)

export default router
