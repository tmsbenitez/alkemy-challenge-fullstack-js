import { useState, useMemo } from 'react'

// Components
import Background from '../components/design/Background.jsx'
import Header from '../components/Header.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Placeholder from '../components/Placeholder.jsx'
import Movement from '../components/Movement.jsx'
import TypeFilters from '../components/filters/TypeFilters.jsx'
import CategoryFilters from '../components/filters/CategoryFilters.jsx'

const Movements = ({ movements, setCall }) => {
	const [filter, setFilter] = useState({
		type: null,
		category: null,
	})

	const filteredMovements = useMemo(() => {
		const { type, category } = filter

		let filters = type ? movements.filter(m => m.type === type) : movements

		filters = category ? filters.filter(m => m.category === category) : filters

		return filters
	}, [filter, movements])

	return (
		<div className="flex min-h-screen mb-24 lg:mb-0">
			<Background />
			<Sidebar />
			<div className="flex flex-col w-full gap-8 p-6 lg:p-16 lg:pt-10">
				<Header />
				<h2 className="text-3xl font-bold font-quicksand">All movements</h2>
				<div className="w-full flex flex-col lg:flex-row gap-6 bg-white rounded-xl justify-between py-2 px-6">
					<div className="flex flex-col lg:flex-row gap-6">
						<TypeFilters filter={filter} setFilter={setFilter} />
						<CategoryFilters filter={filter} setFilter={setFilter} />
					</div>
					<button
						className="font-quicksand font-medium bg-grey border-grey border-2 px-2 rounded hover:text-blue-500 hover:bg-white duration-200"
						onClick={() => window.location.reload()}
					>
						Remove filters
					</button>
				</div>
				<span className="text-xl">
					Movements founded: {filteredMovements.length}
				</span>
				<div className="relative flex flex-col 2xl:grid gap-8 2xl:grid-cols-2 justify-items-center">
					{filteredMovements.length === 0 ? (
						<Placeholder />
					) : (
						filteredMovements.map(
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
	)
}

export default Movements
