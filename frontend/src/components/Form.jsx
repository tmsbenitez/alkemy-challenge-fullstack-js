import { useState } from 'react'
import axiosClient from '../config/axios.js'

const Form = props => {
	// Destructure props
	const { setCall } = props
	
	// User id from the Local Storage
	const { id } = JSON.parse(window.localStorage.getItem('LoggedUser'))

	// Create state as an object
	const [movement, setMovement] = useState({
		concept: '',
		amount: '',
		date: '',
		type: 'Income',
		userId: id,
	})

	// Verify error
	const [formError, setFormError] = useState(false)

	// Success message
	const [success, setSuccess] = useState(false)

	// Form read
	const refreshState = ({ target }) => {
		setMovement({
			...movement,
			[target.name]: target.value,
		})
	}

	// Send request to API
	const createMovement = event => {
		event.preventDefault()
		const { concept, amount, date } = movement

		if (concept === '' || amount === '' || date === '') {
			setFormError(true)
			return
		} else {
			setFormError(false)
			setSuccess(true)
			setTimeout(() => setSuccess(false), 5000)
			axiosClient
				.post('/movements', movement)
				.then(res => setCall(true))
				.catch(error => console.error(error))
		}
	}

	// Inputs
	const inputs = [
		{
			label: 'Concept',
			type: 'text',
			min: null,
			name: 'concept',
			value: movement.concept,
			placeholder: 'Shopping',
		},
		{
			label: 'Amount',
			type: 'number',
			min: 1,
			name: 'amount',
			value: movement.amount,
			placeholder: '2000',
		},
		{
			label: 'Date',
			type: 'text',
			min: null,
			name: 'date',
			value: movement.date,
			placeholder: 'YYYY-DD-MM',
		},
	]

	return (
		<div className="flex flex-col gap-4 m-10 font-latoFont">
			<h2 className="text-xl font-bold">Add a new movement</h2>
			<form className="flex flex-col gap-2" onSubmit={createMovement}>
				{inputs.map(input => {
					const { label, type, min, name, value, placeholder } = input

					return (
						<div key={name} className="flex items-center gap-2">
							<label className="w-full">{label}</label>
							<input
								type={type}
								min={min}
								className="p-1 border rounded border-neutral-900"
								value={value}
								onChange={refreshState}
								name={name}
								placeholder={placeholder}
							/>
						</div>
					)
				})}
				<div className="flex items-center gap-2">
					<label className="w-full">Type</label>
					<select className="w-full" onChange={refreshState} name="type">
						<option value="Income">Income</option>
						<option value="Outcome">Outcome</option>
					</select>
				</div>
				<input
					type="submit"
					className="flex items-center justify-center px-6 py-1 ml-auto border rounded border-neutral-900"
					value="Add"
				/>
			</form>
			{formError ? <p>Please, complete the form</p> : null}
			{success ? <p>Added!</p> : null}
		</div>
	)
}

export default Form
