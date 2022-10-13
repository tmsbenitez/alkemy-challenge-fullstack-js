import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import axiosClient from './config/axios.js'

// Pages
import Login from './pages/Login.jsx'
import New from './pages/New.jsx'
import Home from './pages/Home.jsx'
import Edit from './pages/Edit.jsx'
import CreateAccount from './pages/CreateAccount'
import Movements from './pages/Movements'

const App = () => {
	// App State
	const [movements, setMovements] = useState([])
	const [call, setCall] = useState(true)

	// Get item from the Local Storage
	const loggedUserJSON = window.localStorage.getItem('LoggedUser')

	useEffect(() => {
		// Call API
		if (loggedUserJSON && call) {
			const callAPI = () => {
				const loggedUser = JSON.parse(loggedUserJSON)

				axiosClient
					.get('/movements', { params: { loggedUserId: loggedUser.id } })
					.then(res => setMovements(res.data.reverse()))
					.catch(error => console.error(error))

				setCall(false)
			}

			callAPI()
		}
	})

	return (
		<Routes>
			<Route
				path="/"
				element={loggedUserJSON ? <Navigate replace to="/home" /> : <Login />}
			/>
			<Route
				path="/home"
				element={
					!loggedUserJSON ? (
						<Navigate replace to="/" />
					) : (
						<Home movements={movements} setCall={setCall} />
					)
				}
			/>
			<Route
				path="/new"
				element={
					!loggedUserJSON ? (
						<Navigate replace to="/" />
					) : (
						<New setCall={setCall} />
					)
				}
			/>
			<Route
				path="/movements"
				element={
					!loggedUserJSON ? (
						<Navigate replace to="/" />
					) : (
						<Movements setCall={setCall} movements={movements} />
					)
				}
			/>
			<Route
				path="/movements/:id"
				element={
					!loggedUserJSON ? (
						<Navigate replace to="/" />
					) : (
						<Edit setCall={setCall} />
					)
				}
			/>
			<Route path="/api/create" element={<CreateAccount />} />
		</Routes>
	)
}

export default App
