import { useState } from 'react'
import axiosClient from '../config/axios.js'

// Icons
import { CheckIcon, PlusIcon, WarningIcon } from './designs/Icons.jsx'

// Background
import { BlueCircles } from './designs/Background.jsx'

const Form = ({ setCall }) => {
	// Get user from the Local Storage
	const { id, token } = JSON.parse(window.localStorage.getItem('LoggedUser'))

	const [movement, setMovement] = useState({
		concept: '',
		amount: '',
		date: '',
		type: 'Income',
		category: 'No category',
		userId: id,
	})
	const [formError, setFormError] = useState(false)
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
			setFormError(false)
			setTimeout(() => setFormError(true), 100)
			return
		} else {
			setFormError(false)
			setSuccess(false)
			setTimeout(() => setSuccess(true), 100)
			axiosClient
				.post('/movements', movement, {
					headers: { Authorization: 'Bearer ' + token },
				})
				.then(res => setCall(true))
				.catch(error => console.error(error))
		}
	}

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

	const selects = [
		{
			label: 'Type',
			name: 'type',
			options: [{ value: 'Income' }, { value: 'Egress' }],
		},
		{
			label: 'Category',
			name: 'category',
			options: [
				{ value: 'No category' },
				{ value: 'Shopping' },
				{ value: 'Entertainment' },
				{ value: 'Restaurants and bars' },
				{ value: 'Health and sports' },
				{ value: 'Services' },
				{ value: 'Market' },
				{ value: 'Transport' },
				{ value: 'Holidays' },
			],
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
								className="z-10 w-64 p-1 duration-200 border-2 rounded-lg outline-none border-grey focus:border-blue-500"
								value={value}
								onChange={refreshState}
								name={name}
								placeholder={placeholder}
							/>
						</div>
					)
				)}
				{selects.map(({ label, name, options }) => (
					<div className="flex flex-col gap-2" key={name}>
						<label>{label}</label>
						<select
							className="z-10 w-64 p-1 duration-200 border-2 rounded-lg outline-none border-grey focus:border-blue-500"
							onChange={refreshState}
							name={name}
						>
							{options.map(({ value }) => (
								<option value={value} key={value}>
									{value}
								</option>
							))}
						</select>
					</div>
				))}

				<div className="flex flex-col items-start gap-6 mt-6 lg:flex-row lg:items-center">
					<button
						type="submit"
						className="z-10 flex items-center justify-center gap-1 px-6 py-1 duration-200 border-2 rounded cursor-pointer border-grey bg-grey hover:bg-white hover:text-blue-500"
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
