import express from 'express'
import {
	saveMovement,
	getAllMovements,
	getOneMovement,
	editMovement,
	deleteMovement,
} from '../controllers/movementController.js'

const router = express.Router()

// Add movement on Database
router.post('/movements', saveMovement)

// Get movements from Database
router.get('/movements', getAllMovements)

// Get a single movement by id
router.get('/movements/:id', getOneMovement)

// Edit movement on Database
router.put('/movements/:id', editMovement)

// Delete movement on Database
router.delete('/movements/:id', deleteMovement)

export default router
