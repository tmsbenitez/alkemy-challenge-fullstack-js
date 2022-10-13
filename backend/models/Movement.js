import Sequelize from 'sequelize'
import db from '../database/db.js'

export const Movement = db.define('movements', {
	concept: {
		type: Sequelize.STRING,
	},
	amount: {
		type: Sequelize.BIGINT,
	},
	date: {
		type: Sequelize.DATEONLY,
	},
	type: {
		type: Sequelize.STRING,
	},
	category: {
		type: Sequelize.STRING,
	},
	userId: {
		type: Sequelize.BIGINT,
	},
})
