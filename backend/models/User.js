import Sequelize from 'sequelize'
import db from '../database/db.js'

export const User = db.define('users', {
	username: {
		type: Sequelize.STRING,
	},
	password: {
		type: Sequelize.STRING,
	},
})
