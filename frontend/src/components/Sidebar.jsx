import { Link } from 'react-router-dom'

const Sidebar = () => {
	return (
		<aside className="flex flex-col items-center h-screen gap-2 py-10 text-white w-72 bg-neutral-900 font-cabin">
			<div>
				<Link to={'/home'}>
					<h2 className="text-xl font-bold font-cabin">Budget Manager</h2>
				</Link>
			</div>
			<nav>
				<ul className='flex flex-col gap-2'>
					<Link to={'/home'}>
						<li className="px-4 py-2 rounded hover:bg-neutral-700">Home</li>
					</Link>
					<Link to={'/new'}>
						<li className="px-4 py-2 rounded hover:bg-neutral-700">
							Add Movement
						</li>
					</Link>
				</ul>
			</nav>
		</aside>
	)
}

export default Sidebar
