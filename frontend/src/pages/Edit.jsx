import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axiosClient from '../config/axios'

// Components
import Sidebar from '../components/Sidebar'

const Edit = props => {
	// Edit component state
	const [movement, setMovement] = useState({
		concept: '',
		amount: '',
		date: '',
		type: 'Income',
	})
	const [consult, setConsult] = useState(true)
	// Verify error
	const [formError, setFormError] = useState(false)
	// Success message
	const [success, setSuccess] = useState(false)

	// Destructure props
	const { setCall } = props

	// Get URL params
	let params = useParams()

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
	const refreshState = event => {
		setMovement({
			...movement,
			[event.target.name]: event.target.value,
		})
	}

	// Send request to API
	const editMovement = e => {
		e.preventDefault()

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
	]

	return (
		<div className="flex w-full">
			<Sidebar />
			<div className="flex flex-col gap-4 m-10 font-cabin">
				<h2 className="text-xl font-bold">Edit movement</h2>
				<form className="flex flex-col gap-2" onSubmit={editMovement}>
					{inputs.map(input => (
						<div key={input.name} className="flex items-center gap-2">
							<label className="w-full">{input.label}</label>
							<input
								type={input.type}
								min={input.min}
								className="p-1 border rounded border-neutral-900"
								value={input.value}
								name={input.name}
								disabled={input.disabled ? 'disabled' : null}
								onChange={refreshState}
								placeholder={input.placeholder}
							/>
						</div>
					))}
					<input
						type="submit"
						className="flex items-center justify-center px-6 py-1 ml-auto border rounded border-neutral-900"
						value="Edit"
					/>
				</form>
				{formError ? <p>Please, complete the form</p> : null}
				{success ? <p>Edited!</p> : null}
			</div>
		</div>
	)
}

export default Edit
