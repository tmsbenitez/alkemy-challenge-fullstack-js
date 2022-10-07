import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Components
import Sidebar from '../components/Sidebar.jsx'
import Remove from '../components/Remove.jsx'
import Header from '../components/Header.jsx'

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

			setFilteredMovements(filter)
		}
		filterMovements()
	}, [movements])

	// Get total budget
	useEffect(() => {
		const total = filteredMovements.reduce(
			(sum, value) =>
				Number(value.amount) && value.type === 'Income'
					? sum + value.amount
					: sum - value.amount,
			0
		)
		setBudget(total)
	}, [filteredMovements])

	return (
		<div className="flex w-full font-cabin">
			<Sidebar />
			<main className='flex flex-col'>
				<Header />
				<div className="flex flex-col gap-4 m-10">
					<h2 className="flex px-6 py-10 text-4xl text-white rounded bg-neutral-900">
						Budget: ${budget}
					</h2>
					<div className="grid grid-cols-6 gap-4">
						{filteredMovements.map(movement => {
							const { id, concept, amount, date, type } = movement

							return (
								<div
									key={id}
									className="flex flex-col gap-1 p-2 border rounded border-neutral-900"
								>
									<Remove id={id} setCall={setCall} />
									<Link to={`/movements/${id}`}>Edit</Link>
									<p>{concept}</p>
									<p>${amount}</p>
									<p>{date.slice(0, 10)}</p>
									<p>{type}</p>
								</div>
							)
						})}
					</div>
				</div>
			</main>
		</div>
	)
}

export default Home
