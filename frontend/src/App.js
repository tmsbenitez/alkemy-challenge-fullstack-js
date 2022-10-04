import React, { useEffect, useState } from 'react'
import './App.css'
import axiosClient from './config/axios.js'

function App() {
	const [movements, setMovements] = useState([])
	const [call, setCall] = useState(true)

	// Call API
	const callAPI = () => {
		if (call) {
			axiosClient
				.get('/movements')
				.then(res => setMovements(res.data))
				.catch(error => console.error(error))

			setCall(false)
		}
	}

	useEffect(() => {
		callAPI()
	})

	return (
		<div className="App">
			{movements.map(move => {
				const { id, concept, amount, date, type } = move

				return (
					<div key={id}>
						<p>${amount}</p>
						<p>{concept}</p>
						<p>{date}</p>
						<p>{type}</p>
					</div>
				)
			})}
		</div>
	)
}

export default App
