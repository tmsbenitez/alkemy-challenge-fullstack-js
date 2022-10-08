import { Link } from 'react-router-dom'

const Sidebar = () => {
	return (
		<aside className="flex flex-col items-center gap-2 py-10 m-10 text-black bg-white border-2 border-grey rounded-2xl w-72 font-latoFont">
			<nav>
				<ul className="flex flex-col gap-2">
					<Link to={'/home'}>
						<li className="flex items-center gap-2 px-4 py-2 duration-200 rounded-xl hover:bg-grey">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
								/>
							</svg>
							Home
						</li>
					</Link>
					<Link to={'/new'}>
						<li className="flex items-center gap-2 px-4 py-2 duration-200 rounded-xl hover:bg-grey">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 4.5v15m7.5-7.5h-15"
								/>
							</svg>
							Add Movement
						</li>
					</Link>
				</ul>
			</nav>
		</aside>
	)
}

export default Sidebar
