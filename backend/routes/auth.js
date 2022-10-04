import { Router } from 'express'
import { getAllUsers, signup, signin } from '../controllers/authController.js'

const router = Router()

// Get all users
router.get('/api/signup', getAllUsers)

// Create a new user
router.post('/api/signup', signup)

// Sign In
router.post('/api/signin', signin)

export default router
