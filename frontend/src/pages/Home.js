import { Link } from 'react-router-dom'

// Components
import Sidebar from '../components/Sidebar'
import Remove from '../components/Remove'

const Home = props => {
	// Destructure props
	const { movements, budget, setCall } = props

	return (
		<div className="flex w-full font-cabin">
			<Sidebar />
			<main className="flex flex-col gap-4 m-10">
				<h2 className="flex px-6 py-10 text-4xl text-white rounded bg-neutral-900">
					Budget: ${budget}
				</h2>
				<div className="grid grid-cols-6 gap-4">
					{movements.map(movement => {
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
			</main>
		</div>
	)
}

export default Home
