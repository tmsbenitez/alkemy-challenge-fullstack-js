// Components
import Background from '../components/Design/Background'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Placeholder from '../components/Placeholder'
import Movement from '../components/Movement'

const Movements = ({ movements, setCall }) => {
	return (
		<div className="flex min-h-screen">
			<Background />
			<Sidebar />
			<div className="flex flex-col w-full gap-10 m-10">
				<Header />
				<h2 className="text-3xl font-bold font-quicksand">All movements</h2>
				<div className="relative flex flex-col gap-8 justify-items-center">
					{movements.length === 0 ? (
						<Placeholder />
					) : (
						movements.map(({ id, concept, amount, date, type }) => (
							<Movement
								key={id}
								id={id}
								concept={concept}
								amount={amount}
								date={date}
								type={type}
								setCall={setCall}
							/>
						))
					)}
				</div>
			</div>
		</div>
	)
}

export default Movements
