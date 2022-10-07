import { Router } from 'express'
import { createAccount, login, getAllUsers } from '../controllers/authController.js'

const router = Router()

// Create account
router.post('/api/create', createAccount)

// Log In
router.post('/', login)

// Get all users
router.get('/api/users', getAllUsers)

export default router
