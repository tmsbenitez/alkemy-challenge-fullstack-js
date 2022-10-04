import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import axiosClient from './config/axios.js'

// Pages
import Login from './pages/Login'
import SignIn from './pages/SignIn'
import New from './pages/New.js'
import Home from './pages/Home.js'
import Edit from './pages/Edit'

const App = () => {
	// App State
	const [movements, setMovements] = useState([])
	const [call, setCall] = useState(true)
	const [budget, setBudget] = useState(0)

	// Get total budget
	const getBudget = () => {
		const total = movements.reduce(
			(sum, value) =>
				Number(value.amount) && value.type === 'Income'
					? sum + value.amount
					: sum - value.amount,
			0
		)
		setBudget(total)
	}

	// Call API
	useEffect(() => {
		if (call) {
			const callAPI = () => {
				axiosClient
					.get('/movements')
					.then(res => setMovements(res.data))
					.catch(error => console.error(error))

				setCall(false)
			}

			callAPI()
		}
		getBudget()
	})

	return (
		<Routes>
			<Route
				exact
				path="/"
				element={
					<Home movements={movements} budget={budget} setCall={setCall} />
				}
			/>
			<Route exact path='/login' element={<Login />} />
			<Route exact path='/signin' element={<SignIn />} />
			<Route exact path="/new" element={<New setCall={setCall} />} />
			<Route exact path="/movements/:id" element={<Edit setCall={setCall} />} />
		</Routes>
	)
}

export default App
