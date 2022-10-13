import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axiosClient from '../config/axios'

// Components
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

// Icons
import { WarningIcon, CheckIcon } from '../components/designs/Icons'

// Background
import Background, { BlueCircles } from '../components/designs/Background'

const Edit = ({ setCall }) => {
	const [movement, setMovement] = useState({
		concept: '',
		amount: '',
		date: '',
		type: 'Income',
		category: '',
	})
	const [consult, setConsult] = useState(true)
	const [formError, setFormError] = useState(false)
	const [success, setSuccess] = useState(false)

	// Get URL params
	const params = useParams()

	// Call API
	useEffect(() => {
		if (consult) {
			const callAPI = () => {
				axiosClient
					.get(`/movements/${params.id}`)
					.then(res => setMovement(res.data))
					.catch(error => console.error(error))

				setConsult(false)
				setCall(true)
			}
			callAPI()
		}
	})

	// Form read
	const refreshState = ({ target }) => {
		setMovement({
			...movement,
			[target.name]: target.value,
		})
	}

	// Send request to API
	const editMovement = event => {
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
			setSuccess(false)
			setTimeout(() => setSuccess(true), 100)
			axiosClient
				.put(`/movements/${movement.id}`, movement)
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
			disabled: false,
			placeholder: 'Shopping',
		},
		{
			label: 'Amount',
			type: 'number',
			min: 1,
			name: 'amount',
			value: movement.amount,
			disabled: false,
			placeholder: '2000',
		},
		{
			label: 'Date',
			type: 'text',
			min: null,
			name: 'date',
			value: movement.date,
			disabled: false,
			placeholder: 'YYYY-DD-MM',
		},
		{
			label: 'Type',
			type: 'text',
			min: null,
			name: 'type',
			value: movement.type,
			disabled: true,
		},
		{
			label: 'Category',
			type: 'text',
			min: null,
			name: 'category',
			value: movement.category,
			disabled: true,
		},
	]

	return (
		<div className="flex w-full min-h-screen mb-24 lg:mb-0">
			<Background />
			<Sidebar />
			<div className="flex flex-col w-full gap-10 p-6 lg:p-16 lg:pt-10">
				<Header />
				<h2 className="text-3xl font-bold font-quicksand">Edit movement</h2>
				<div className="relative flex flex-col justify-center w-full gap-4 p-6 bg-white border-2 rounded-2xl font-latoFont border-grey">
					<form className="flex flex-col gap-2 w-fit" onSubmit={editMovement}>
						{inputs.map(
							({ label, type, min, name, value, placeholder, disabled }) => (
								<div key={name} className="flex flex-col gap-2 w-fit">
									<label>{label}</label>
									<input
										type={type}
										min={min}
										className="w-64 p-1 duration-200 border-2 rounded-lg outline-none border-grey focus:border-blue-500"
										value={value}
										name={name}
										disabled={disabled ? 'disabled' : null}
										onChange={refreshState}
										placeholder={placeholder}
									/>
								</div>
							)
						)}
						<div className="flex items-center gap-6 mt-6">
							<button
								type="submit"
								className="flex items-center justify-center gap-1 px-6 py-1 duration-200 border-2 rounded cursor-pointer border-grey bg-grey hover:bg-white hover:text-blue-500"
								value="Edit"
							>
								Edit
							</button>
							{formError ? (
								<p className="flex items-center gap-1 text-red">
									<WarningIcon /> Please, complete the form
								</p>
							) : null}
							{success ? (
								<p className="flex items-center gap-1 text-green">
									<CheckIcon />
									Edited!
								</p>
							) : null}
						</div>
					</form>
					<BlueCircles />
				</div>
			</div>
		</div>
	)
}

export default Edit
