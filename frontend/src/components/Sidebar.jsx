import { Link } from 'react-router-dom'

// Icons
import { HomeIcon, PlusIcon, ArrowsUpDown } from './Design/Icons.jsx'

const Sidebar = () => {
	const location = window.location.pathname

	const menus = [
		{
			href: '/home',
			icon: <HomeIcon />,
			innerText: 'Home',
		},
		{
			href: '/new',
			icon: <PlusIcon />,
			innerText: 'Add movements',
		},
		{
			href: '/movements',
			icon: <ArrowsUpDown />,
			innerText: 'All movements',
		},
	]

	return (
		<aside className="flex flex-col items-center gap-2 py-10 m-10 mr-0 text-black bg-white border-2 border-grey rounded-2xl w-72 font-latoFont">
			<nav>
				<ul className="flex flex-col gap-4">
					{menus.map(menu => {
						const { href, icon, innerText } = menu

						return (
							<Link to={href} key={innerText}>
								<li
									className={`flex items-center gap-2 px-4 py-2 duration-200 rounded-xl hover:bg-grey ${
										location === href
											? 'bg-blue-500 text-white pointer-events-none'
											: null
									}`}
								>
									{icon}
									{innerText}
								</li>
							</Link>
						)
					})}
				</ul>
			</nav>
		</aside>
	)
}

export default Sidebar
