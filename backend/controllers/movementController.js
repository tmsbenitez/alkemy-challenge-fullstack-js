import { Movement } from '../models/Movement.js'
import jwt from 'jsonwebtoken'

export const saveMovement = async (req, res, next) => {
	try {
		const { concept, amount, date, type, userId } = req.body

		await Movement.create({ concept, amount, date, type, userId })

		res.json({ message: 'Added successfully' })
	} catch (error) {
		console.error(error)
		next()
	}
}

export const getAllMovements = async (req, res, next) => {
	try {
		const movements = await Movement.findAll()
		res.json(movements)
	} catch (error) {
		console.error(error)
		next()
	}
}

export const getOneMovement = async (req, res, next) => {
	try {
		const { id } = req.params
		const movement = await Movement.findByPk(id)
		res.json(movement)
	} catch (error) {
		console.error(error)
		next()
	}
}

export const editMovement = async (req, res, next) => {
	try {
		const { concept, amount } = req.body
		const { id } = req.params
		await Movement.update({ concept, amount }, { where: { id } })

		const movement = await Movement.findByPk(id)
		res.json(movement)
	} catch (error) {
		console.error(error)
		next()
	}
}

export const deleteMovement = async (req, res, next) => {
	try {
		const { id } = req.params
		await Movement.destroy({ where: { id } })
		res.json({ message: 'Movement deleted successfully' })
	} catch (error) {
		console.error(error)
		next()
	}
}
