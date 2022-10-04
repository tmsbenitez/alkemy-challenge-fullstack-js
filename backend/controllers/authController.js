import jwt from 'jsonwebtoken'
import { User } from '../models/User.js'

export const getAllUsers = async (req, res) => {
	try {
		const users = await User.findAll()
		res.json(users)
	} catch (error) {
		console.error(error)
	}
}

export const signup = async (req, res) => {
	try {
		const savedUser = await User.create({
			username: req.body.username,
			password: req.body.password,
		})

		const token = jwt.sign({ id: savedUser.id }, 'secret_key', {
			expiresIn: 86400, // 24 hours
		})

		res.status(200).json({ token })
	} catch (error) {
		console.error(error)
	}
}

export const signin = async (req, res) => {
	try {
		const userFound = await User.findOne({ username: req.body.username })

		if (!userFound) return res.status(400).json({ message: 'User not found' })

		const matchPassword = userFound.password === req.body.password

		if (!matchPassword)
			return res.status(401).json({ token: null, message: 'Invalid password' })

		const token = jwt.sign({ id: userFound.id }, 'secret_key', {
			expiresIn: 86400, // 24 hours
		})

		res.json({ token })
	} catch (error) {
		console.error(error)
	}
}
