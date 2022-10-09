// Components
import Remove from '../components/Remove.jsx'
import Edit from '../components/Edit.jsx'

// Icons
import {
	MoneyIcon,
	DateIcon,
	ArrowsUpDown,
	ArrowUp,
	ArrowDown,
} from './Icons.jsx'

const Movements = props => {
	const { filteredMovements, setCall } = props

	return (
		<div className="grid gap-8 2xl:grid-cols-2 justify-items-center">
			{filteredMovements.map(movement => {
				const { id, concept, amount, date, type } = movement

				return (
					<div
						key={id}
						className={`relative flex gap-2 w-full justify-between items-center py-6 px-6 bg-white border-2 rounded-xl border-grey`}
					>
						<div className="w-full ">
							<p className="z-10 text-2xl font-medium">{concept}</p>

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
							</div>
						</div>
						<p
							className={`absolute right-6 justify-center flex flex-col items-center text-xl ${
								type === 'Income' ? 'text-green' : 'text-red'
							}`}
						>
							{type === 'Income' ? (
								<ArrowUp classes="w-12 h-12" />
							) : (
								<ArrowDown classes="w-12 h-12" />
							)}
						</p>
						<div className="z-10 flex gap-8 mt-4">
							<Remove id={id} setCall={setCall} />
							<Edit id={id} />
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Movements
