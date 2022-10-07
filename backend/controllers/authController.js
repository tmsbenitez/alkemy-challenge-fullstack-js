import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { User } from '../models/User.js'

export const createAccount = async (req, res, next) => {
	try {
		const { username, password, name, email } = req.body

		const saltRounds = 10
		const passwordHash = bcrypt.hashSync(password, saltRounds)

		const user = await User.create({
			username,
			name,
			email,
			passwordHash
		})

		res.json(user)
	} catch (error) {
		res.status(409).json({ message: 'Username or email is already in use' })
		next()
	}
}

export const login = async (req, res, next) => {
	try {
		const { username, password } = req.body
		const user = await User.findOne({ where: { username } })
		const correctPassword =
			user === null ? false : await bcrypt.compare(password, user.passwordHash)

		if (!(user && correctPassword)) {
			await res.status(401).json({ error: 'Invalid user or password' })
		}

		const userForToken = {
			id: user.id,
			username: user.username,
		}

		const token = jwt.sign(userForToken, 'pbm_secret_key', {
			expiresIn: 60 * 60 * 24 * 7, // Expires in 1 week
		})

		res.json({
			id: user.id,
			username: user.username,
			name: user.name,
			email: user.email,
			token: token,
		})
	} catch (error) {
		console.error(error)
		next()
	}
}

// Get all users
export const getAllUsers = async (req, res) => {
	try {
		const users = await User.findAll()
		res.json(users)
	} catch (error) {
		console.error(error)
	}
}
