import { Movement } from '../models/Movement.js'
import jwt from 'jsonwebtoken'

export const saveMovement = async (req, res, next) => {
	try {
		const { concept, amount, date, type, userId } = req.body

		const authorization = req.get('authorization')

		let token = ''

		if (authorization && authorization.toLowerCase().startsWith('bearer')) {
			token = authorization.substring(7)
		}

		let decodedToken = {}

		try {
			decodedToken = jwt.verify(token, 'pbm_secret_key')
		} catch (error) {
			console.error(error)
		}

		if (!token || !decodedToken.id) {
			return res.status(401).json({ error: 'token missing or invalid' })
		}

		await Movement.create({ concept, amount, date, type, userId })

		res.json({ message: 'Added successfully' })
	} catch (error) {
		console.error(error)
		next()
	}
}

export const getAllMovements = async (req, res, next) => {
	try {
		const { loggedUserId } = req.query
		const movements = await Movement.findAll({ where: { userId: loggedUserId } })
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
