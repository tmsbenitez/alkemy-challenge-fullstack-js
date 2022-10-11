import { useState } from 'react'
import axiosClient from '../config/axios.js'
import { BlueCircles } from './Design/Background.jsx'

import { CheckIcon, PlusIcon, WarningIcon } from './Design/Icons.jsx'

const Form = ({ setCall }) => {
	// User id from the Local Storage
	const { id, token } = JSON.parse(window.localStorage.getItem('LoggedUser'))

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
				.post('/movements', movement, {
					headers: { Authorization: 'Bearer ' + token },
				})
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
			maxLength: null,
			name: 'concept',
			value: movement.concept,
			placeholder: 'Shopping',
		},
		{
			label: 'Amount',
			type: 'number',
			min: 1,
			maxLength: null,
			name: 'amount',
			value: movement.amount,
			placeholder: '2000',
		},
		{
			label: 'Date',
			type: 'date',
			min: '2000-01-01',
			max: '2022-12-31',
			maxLength: 10,
			name: 'date',
			value: movement.date,
			placeholder: 'DD-MM-YYYY',
		},
	]

	return (
		<div className="relative flex flex-col justify-center w-full gap-4 p-6 bg-white border-2 rounded-2xl font-latoFont border-grey">
			<form className="flex flex-col gap-2 w-fit" onSubmit={createMovement}>
				{inputs.map(
					({ label, type, min, max, maxLength, name, value, placeholder }) => (
						<div key={name} className="flex flex-col gap-2 w-fit">
							<label>{label}</label>
							<input
								type={type}
								min={min}
								max={max}
								maxLength={maxLength}
								className="w-64 p-1 duration-200 border-2 rounded-lg outline-none border-grey focus:border-blue-500"
								value={value}
								onChange={refreshState}
								name={name}
								placeholder={placeholder}
							/>
						</div>
					)
				)}
				<div className="flex flex-col gap-2">
					<label>Type</label>
					<select
						className="w-64 p-1 duration-200 border-2 rounded-lg outline-none border-grey focus:border-blue-500"
						onChange={refreshState}
						name="type"
					>
						<option value="Income">Income</option>
						<option value="Outcome">Outcome</option>
					</select>
				</div>
				<div className="flex items-center gap-6 mt-6">
					<button
						type="submit"
						className="flex items-center justify-center gap-1 px-6 py-1 duration-200 border-2 rounded cursor-pointer border-grey bg-grey hover:bg-white hover:text-blue-500"
					>
						<PlusIcon classes="w-5 h-5" />
						Add
					</button>
					{formError ? (
						<p className="flex items-center gap-1 text-red">
							<WarningIcon /> Please, complete the form
						</p>
					) : null}
					{success ? (
						<p className="flex items-center gap-1 text-green">
							<CheckIcon />
							Added!
						</p>
					) : null}
				</div>
			</form>
			<BlueCircles />
		</div>
	)
}

export default Form
