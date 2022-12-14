import { useRef } from 'react'
import axiosClient from '../config/axios'

// Icons
import { TrashIcon, CloseIcon } from './designs/Icons.jsx'

const Remove = ({ id, setCall, setConfirmRemove }) => {
	// Hide the component when click away
	const wrapperRef = useRef()

	const clickAwayListener = ref => {
		const handleClickAway = event => {
			if (ref.current && !ref.current.contains(event.target)) {
				setConfirmRemove(false)
			}
		}

		document.addEventListener('mouseup', handleClickAway)
	}

	clickAwayListener(wrapperRef)

	// Send request to API
	const removeMovement = () => {
		axiosClient
			.delete(`/movements/${id}`)
			.then(res => setCall(true))
			.catch(error => console.error(error))
	}

	return (
		<div
			ref={wrapperRef}
			className="absolute bottom-0 right-0 z-50 flex flex-col items-center justify-center w-full h-full gap-6 p-10 bg-white border-2 shadow-xl border-grey rounded-xl"
		>
			<p className="text-lg text-center">
				Are you sure you want to remove this movement?
			</p>
			<div className="flex flex-col gap-2 lg:gap-6 lg:flex-row">
				<button
					onClick={() => setConfirmRemove(false)}
					className="flex items-center justify-center w-32 gap-1 px-4 py-2 duration-200 border-2 rounded-lg border-grey bg-grey hover:bg-white hover:text-blue-500"
				>
					<CloseIcon classes="w-4 h-4" />
					Cancel
				</button>
				<button
					onClick={removeMovement}
					className="flex items-center justify-center w-32 gap-1 px-4 py-2 text-white duration-200 border-2 rounded-lg border-grey bg-red hover:bg-white hover:text-red"
				>
					<TrashIcon classes="w-4 h-4" />
					Remove
				</button>
			</div>
		</div>
	)
}

export default Remove
