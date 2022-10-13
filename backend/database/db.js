import { Sequelize } from 'sequelize'
import dotenv from 'dotenv';
dotenv.config()

const db = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		dialect: 'sqlite',
		host: process.env.DB_HOST,
	}
)

export default db
