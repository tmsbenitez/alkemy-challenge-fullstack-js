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
	CategoryIcon
} from './design/Icons.jsx'
import { BlueCircles } from './design/Background.jsx'

const Movement = props => {
	const { id, concept, amount, date, type, category, setCall } = props

	return (
		<div
			key={id}
			className={`relative flex gap-2 w-full justify-between items-center py-6 px-6 bg-white border-2 rounded-xl border-grey`}
		>
			<div className="w-full">
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
				<div className="z-10 flex gap-6 mt-6">
					<Edit id={id} />
					<Remove id={id} setCall={setCall} />
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
