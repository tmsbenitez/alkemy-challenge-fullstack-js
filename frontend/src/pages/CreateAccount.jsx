import axiosClient from '../config/axios.js'
import { useState } from 'react'

// Components
import CreateAccountForm from '../components/CreateAccountForm.jsx'
import Background from '../components/Design/Background.jsx'

const CreateAccount = () => {
	// Create Account State
	const [newUser, setNewUser] = useState({
		username: '',
		name: '',
		email: '',
		password: '',
	})
	const [success, setSuccess] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [error, setError] = useState(false)

	// Form read
	const refreshState = ({ target }) => {
		setNewUser({
			...newUser,
			[target.name]: target.value,
		})
	}

	// Create new user
	const createNewUser = event => {
		event.preventDefault()

		const { username, name, email, password } = newUser

		if (username === '' || name === '' || email === '' || password === '') {
			setErrorMessage('Please, fill the form.')
			setError(true)
		} else {
			axiosClient
				.post('/api/create', newUser)
				.then(res => {
					setSuccess(true)
					setTimeout(() => (window.location.href = '/'), 3000)
				})
				.catch(({ response }) => {
					setErrorMessage(response.data.message)
					setError(true)
				})
		}
	}

	return (
		<main className="flex flex-col items-center justify-center h-screen">
			<Background />
			<CreateAccountForm
				newUser={newUser}
				refreshState={refreshState}
				createNewUser={createNewUser}
				success={success}
				errorMessage={errorMessage}
				error={error}
			/>
		</main>
	)
}

export default CreateAccount
