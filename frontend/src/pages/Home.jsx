import { useState, useEffect } from 'react'

// Components
import Sidebar from '../components/Sidebar.jsx'
import Movement from '../components/Movement.jsx'
import Header from '../components/Header.jsx'
import Placeholder from '../components/Placeholder.jsx'
import Budget from '../components/Budget.jsx'
import Background from '../components/design/Background.jsx'

const Home = ({ movements, setCall }) => {
	// Home State
	const [budget, setBudget] = useState(0)
	const [slicedMovements, setSlicedMovements] = useState([])

	// Slice movements
	useEffect(() => {
		if (movements.length >= 10) {
			setSlicedMovements(
				movements.slice(movements.length - 10, movements.length)
			)
		} else {
			setSlicedMovements(movements.slice(0, movements.length))
		}
	}, [movements])

	// Get total budget
	useEffect(() => {
		const total = slicedMovements
			.reduce(
				(sum, value) =>
					Number(value.amount) && value.type === 'Income'
						? sum + value.amount
						: sum - value.amount,
				0
			)
			.toString()

		if (total.startsWith('-')) {
			setBudget(total.replace('-', '$-'))
		} else {
			setBudget('$' + total)
		}
	}, [slicedMovements])

	return (
		<div className="flex w-full h-full min-h-screen font-latoFont mb-24 lg:mb-0">
			<Background />
			<Sidebar />
			<main className="flex flex-col w-full gap-10 p-6 lg:p-16 lg:pt-10">
				<Header />
				<div className="flex flex-col gap-4">
					<Budget budget={budget} />
					<div>
						<div className="flex flex-col gap-6 lg:flex-row items-center justify-between py-4">
							<h2 className="text-3xl font-bold font-quicksand">
								Last 10 movements
							</h2>
							<div className="flex gap-2">
								<a
									href="/new"
									className="flex items-center gap-1 p-2 px-4 text-xl font-semibold text-black duration-200 border-2 rounded-lg bg-grey border-grey font-quicksand hover:bg-white hover:text-blue-500"
								>
									Add new
								</a>
								<a
									href="/movements"
									className="flex items-center gap-1 p-2 px-4 text-xl font-semibold text-black duration-200 border-2 rounded-lg bg-grey border-grey font-quicksand hover:bg-white hover:text-blue-500"
								>
									See all
								</a>
							</div>
						</div>
						<div className="relative flex flex-col 2xl:grid gap-8 2xl:grid-cols-2 justify-items-center">
							{slicedMovements.length === 0 ? (
								<Placeholder />
							) : (
								slicedMovements.map(
									({ id, concept, amount, date, type, category }) => (
										<Movement
											key={id}
											id={id}
											concept={concept}
											amount={amount}
											date={date}
											type={type}
											category={category}
											setCall={setCall}
										/>
									)
								)
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Home
