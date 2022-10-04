import { Movement } from '../models/Movement.js'

export const saveMovement = async (req, res, next) => {
	try {
		await Movement.create(req.body)
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
		const movement = await Movement.findByPk(req.params.id)
		res.json(movement)
	} catch (error) {
		console.error(error)
		next()
	}
}

export const editMovement = async (req, res, next) => {
	try {
		const { concept, amount } = req.body
		await Movement.update({ concept, amount }, { where: { id: req.params.id } })

		const movement = await Movement.findByPk(req.params.id)
		res.json(movement)
	} catch (error) {
		console.error(error)
		next()
	}
}

export const deleteMovement = async (req, res, next) => {
	try {
		await Movement.destroy({ where: { id: req.params.id } })
		res.json({ message: 'Movement deleted successfully' })
	} catch (error) {
		console.error(error)
		next()
	}
}
