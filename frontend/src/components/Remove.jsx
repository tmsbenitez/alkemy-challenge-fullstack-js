import axiosClient from '../config/axios'

import { TrashIcon } from './Design/Icons.jsx'

const Remove = ({ id, setCall }) => {
	const removeMovement = () => {
		axiosClient
			.delete(`/movements/${id}`)
			.then(res => setCall(true))
			.catch(error => console.error(error))
	}

	return (
		<button
			onClick={removeMovement}
			className="flex items-center justify-center w-32 gap-1 px-4 py-2 duration-200 border-2 rounded-lg border-grey bg-grey hover:bg-white hover:text-red"
		>
			<TrashIcon classes="w-4 h-4" />
			Remove
		</button>
	)
}

export default Remove
