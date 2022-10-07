import Sequelize from 'sequelize'
import db from '../database/db.js'

export const User = db.define('users', {
	username: {
		type: Sequelize.STRING,
		unique: true,
	},
	name: {
		type: Sequelize.STRING,
	},
	email: {
		type: Sequelize.STRING,
		unique: true,
	},
	passwordHash: {
		type: Sequelize.STRING,
	},
})
