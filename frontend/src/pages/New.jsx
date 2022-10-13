// Components
import Form from '../components/Form'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

// Background
import Background from '../components/designs/Background'

const New = ({ setCall }) => {
	return (
		<div className="flex h-screen mb-24 lg:mb-0">
			<Background />
			<Sidebar />
			<div className="flex flex-col w-full gap-10 p-6 lg:p-16 lg:pt-10">
				<Header />
				<h2 className="text-3xl font-bold font-quicksand">Add a new movement</h2>
				<Form setCall={setCall} />
			</div>
		</div>
	)
}

export default New
