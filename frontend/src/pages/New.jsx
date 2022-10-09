// Components
import Form from '../components/Form'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const New = props => {
	// Destructure props
	const { setCall } = props

	return (
		<div className="flex h-screen">
			<div className="flex flex-col w-full m-10">
				<Header />
				<Form setCall={setCall} />
			</div>
			<Sidebar />
		</div>
	)
}

export default New
