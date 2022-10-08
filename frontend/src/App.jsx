import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import axiosClient from './config/axios.js'

// Authentication

// Pages
import Login from './pages/Login.jsx'
import New from './pages/New.jsx'
import Home from './pages/Home.jsx'
import Edit from './pages/Edit.jsx'
import CreateAccount from './pages/CreateAccount'

const App = () => {
	// App State
	const [movements, setMovements] = useState([])
	const [call, setCall] = useState(true)
	const [loggedUser, setLoggedUser] = useState({})

	// Get item from the Local Storage
	const loggedUserJSON = window.localStorage.getItem('LoggedUser')

	useEffect(() => {
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON)
			setLoggedUser(user)
		}
	}, [loggedUserJSON])

	useEffect(() => {
		// Call API
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
	})

	return (
		<Routes>
			<Route
				path="/"
				element={loggedUserJSON ? <Navigate replace to="/home" /> : <Login />}
			/>
			<Route
				path="/home"
				element={<Home movements={movements} setCall={setCall} />}
			/>
			<Route path="/new" element={<New setCall={setCall} />} />
			<Route path="/movements/:id" element={<Edit setCall={setCall} />} />
			<Route path="/api/create" element={<CreateAccount />} />
		</Routes>
	)
}

export default App
