import { Sequelize } from 'sequelize'

const db = new Sequelize('BudgetManager', 'root', 'root', {
	dialect: 'sqlite',
	host: './database/dev.sqlite',
})

export default db
