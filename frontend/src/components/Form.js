import { useState } from 'react'
import axiosClient from '../config/axios.js'

const Form = props => {
	// Destructure props
	const { setCall } = props

	// Create state as an object
	const [movement, setMovement] = useState({
		concept: '',
		amount: '',
		date: '',
		type: 'Income',
	})

	// Verify error
	const [formError, setFormError] = useState(false)

	// Success message
	const [success, setSuccess] = useState(false)

	// Form read
	const refreshState = event => {
		setMovement({
			...movement,
			[event.target.name]: event.target.value,
		})
	}

	// Send request to API
	const createMovement = event => {
		event.preventDefault()

		if (
			movement.concept === '' ||
			movement.amount === '' ||
			movement.date === '' ||
			movement.type === ''
		) {
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
			setMovement({
				concept: '',
				amount: '',
				date: '',
				type: '',
			})
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
		<div className="flex flex-col gap-4 m-10 font-cabin">
			<h2 className="text-xl font-bold">Add a new movement</h2>
			<form className="flex flex-col gap-2" onSubmit={createMovement}>
				{inputs.map(input => (
					<div key={input.name} className="flex items-center gap-2">
						<label className="w-full">{input.label}</label>
						<input
							type={input.type}
							min={input.min}
							className="p-1 border rounded border-neutral-900"
							value={input.value}
							onChange={refreshState}
							name={input.name}
							placeholder={input.placeholder}
						/>
					</div>
				))}
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
