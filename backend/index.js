import express from 'express'
import router from './routes/index.js'
import cors from 'cors'
import db from './database/db.js'

const app = express()

// Enable cors
app.use(cors())

// Connect to Database
db.sync({ force: false })
	.then(() => console.log('Database connected'))
	.catch(error => console.error(error))

// Define port
const PORT = process.env.PORT || 4000

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`)
})
