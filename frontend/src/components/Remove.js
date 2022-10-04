import axiosClient from '../config/axios'

const Remove = props => {
	// Destructure props
	const { id, setCall } = props

	const removeMovement = () => {
		axiosClient
			.delete(`/movements/${id}`)
			.then(res => setCall(true))
			.catch(error => console.error(error))
	}

	return <button onClick={removeMovement}>Remove</button>
}

export default Remove
