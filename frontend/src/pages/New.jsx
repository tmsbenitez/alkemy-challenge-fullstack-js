// Components
import Form from '../components/Form'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Background from '../components/Design/Background'

const New = ({ setCall }) => {
	return (
		<div className="flex h-screen">
			<Background />
			<Sidebar />
			<div className="flex flex-col w-full gap-10 m-10">
				<Header />
				<h2 className="text-3xl font-bold font-quicksand">Add a new movement</h2>
				<Form setCall={setCall} />
			</div>
		</div>
	)
}

export default New
