import { Link } from 'react-router-dom'
import Remove from '../components/Remove.jsx'

const Movements = props => {
	const { filteredMovements, setCall } = props

	return (
		<div className="flex flex-wrap justify-between gap-8">
			{filteredMovements.map(movement => {
				const { id, concept, amount, date, type } = movement

				return (
					<div
						key={id}
						className={`flex flex-col gap-2 py-6 px-6 bg-white border-2 rounded-xl border-grey`}
					>
						{/* CONCEPT */}
						<p className="z-10 text-2xl font-medium text-center">{concept}</p>

						<div className="z-10 flex flex-col gap-2 mr-auto">
							{/* AMOUNT */}
							<p className="flex items-center gap-2 text-md">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
									/>
								</svg>
								${amount}
							</p>

							{/* DATE */}
							<p className="flex items-center gap-2 text-md">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
									/>
								</svg>
								{date}
							</p>

							{/* TYPE */}
							<p
								className={`flex items-center gap-2 text-md ${
									type === 'Income' ? 'text-green' : 'text-red'
								}`}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
									/>
								</svg>
								{type}
							</p>
						</div>

						<div className="z-10 flex gap-8 mt-4">
							<Remove id={id} setCall={setCall} />
							<Link
								to={`/movements/${id}`}
								className="flex items-center justify-center w-32 gap-1 px-4 py-2 duration-200 border-2 rounded-l border-grey bg-grey hover:bg-white hover:text-blue-500"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
									/>
								</svg>
								Edit
							</Link>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Movements
