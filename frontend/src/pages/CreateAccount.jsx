import { useState } from 'react'
import axiosClient from '../config/axios.js'

// Components
import CreateAccountForm from '../components/CreateAccountForm.jsx'

// Background
import Background from '../components/design/Background.jsx'

const CreateAccount = () => {
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
			setErrorMessage('Please, complete the form.')
			setError(true)
		} else {
			setError(false)
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
		<main className="flex flex-col items-center justify-center h-screen mb-24 lg:mb-0">
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
