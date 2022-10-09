import { useState, useEffect } from 'react'

// Components
import Sidebar from '../components/Sidebar.jsx'
import Movements from '../components/Movements.jsx'
import Header from '../components/Header.jsx'
import Budget from '../components/Budget.jsx'

const Home = props => {
	// Destructure props
	const { movements, setCall } = props

	// Home State
	const [budget, setBudget] = useState(0)
	const [filteredMovements, setFilteredMovements] = useState([])

	// Filter movements
	useEffect(() => {
		const filterMovements = () => {
			const { id } = JSON.parse(window.localStorage.getItem('LoggedUser'))

			const filter = movements.filter(movement =>
				movement.userId === id ? movement : null
			)

			setFilteredMovements(
				filter.slice(filter.length - 10, filter.length).reverse()
			)
		}
		filterMovements()
	}, [movements])

	// Get total budget
	useEffect(() => {
		const total = filteredMovements
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
	}, [filteredMovements])

	return (
		<div className="flex w-full font-latoFont">
			<main className="flex flex-col w-full m-10 gap-14">
				<Header />
				<div className="flex flex-col h-full gap-4">
					<Budget budget={budget} />
					<div>
						<div className="flex items-center justify-between py-4">
							<h2 className="text-3xl font-bold font-quicksand">
								Last 10 movements
							</h2>
							<a
								href="/movements"
								className="flex items-center gap-1 p-2 px-4 text-xl font-semibold text-black duration-200 border-2 rounded-lg bg-grey border-grey font-quicksand hover:bg-white hover:text-blue-500"
							>
								See all
							</a>
						</div>
						<Movements
							setCall={setCall}
							filteredMovements={filteredMovements}
						/>
					</div>
				</div>
			</main>
			<Sidebar />
		</div>
	)
}

export default Home
