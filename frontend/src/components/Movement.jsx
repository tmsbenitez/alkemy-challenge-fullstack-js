import { useState } from 'react'

// Components
import Remove from './Remove.jsx'
import Edit from './Edit.jsx'

// Icons
import {
	MoneyIcon,
	DateIcon,
	ArrowsUpDown,
	ArrowUp,
	ArrowDown,
	CategoryIcon,
	TrashIcon,
} from './design/Icons.jsx'

// Background
import { BlueCircles } from './design/Background.jsx'

const Movement = props => {
	const [confirmRemove, setConfirmRemove] = useState(false)
	const { id, concept, amount, date, type, category, setCall } = props

	return (
		<div
			key={id}
			className={`relative flex gap-2 w-full justify-between items-center py-6 px-6 bg-white border-2 rounded-xl border-grey`}
		>
			<div className="w-full flex flex-col relative">
				<p className="z-10 mb-4 text-2xl font-medium">{concept}</p>
				<div className="z-10 flex flex-col gap-2 mr-auto ">
					<p className="flex items-center gap-2 text-md">
						<MoneyIcon />${amount}
					</p>

					<p className="flex items-center gap-2 text-md">
						<DateIcon />
						{date}
					</p>
					<p className="flex items-center gap-2 text-md">
						<ArrowsUpDown />
						{type}
					</p>
					<p className="flex items-center gap-2 text-md">
						<CategoryIcon />
						{category}
					</p>
				</div>
				{confirmRemove ? (
					<Remove
						id={id}
						setCall={setCall}
						confirmRemove={confirmRemove}
						setConfirmRemove={setConfirmRemove}
					/>
				) : null}
				<div className="z-10 flex gap-6 mt-6">
					<Edit id={id} />
					<button
						onClick={() => setConfirmRemove(true)}
						className="flex items-center justify-center w-32 gap-1 px-4 py-2 duration-200 border-2 rounded-lg border-grey bg-grey hover:bg-white hover:text-red"
					>
						<TrashIcon classes="w-4 h-4" />
						Remove
					</button>
				</div>
			</div>
			<p
				className={`absolute right-6 justify-center flex flex-col items-center text-xl ${
					type === 'Income' ? 'text-green' : 'text-red'
				}`}
			>
				{type === 'Income' ? (
					<ArrowUp classes="w-14 h-14 border-2 rounded-full p-2" />
				) : (
					<ArrowDown classes="w-14 h-14 border-2 rounded-full p-2" />
				)}
			</p>

			<BlueCircles />
		</div>
	)
}

export default Movement
