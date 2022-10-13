import { useState } from 'react'
import axiosClient from '../config/axios.js'

// Components
import LoginForm from '../components/LoginForm.jsx'

// Background
import Background from '../components/design/Background.jsx'

const Login = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	})
	const [errorMessage, setErrorMessage] = useState('')

	// Refresh state
	const refreshState = ({ target }) => {
		setUser({
			...user,
			[target.name]: target.value,
		})
	}

	// Validate user
	const validateUser = async event => {
		event.preventDefault()

		await axiosClient
			.post('/', user)
			.then(res => {
				window.localStorage.setItem('LoggedUser', JSON.stringify(res.data))
				window.location.reload()
			})
			.catch(({ response }) => setErrorMessage(response.data.error))
	}

	return (
		<main className="relative flex flex-col items-center justify-center h-screen mb-24 lg:mb-0">
			<Background />
			<LoginForm
				validateUser={validateUser}
				refreshState={refreshState}
				user={user}
				errorMessage={errorMessage}
			/>
		</main>
	)
}

export default Login
