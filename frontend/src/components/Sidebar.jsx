import { Link } from 'react-router-dom'

// Icons
import { HomeIcon, PlusIcon, ArrowsUpDown } from './design/Icons.jsx'

const Sidebar = () => {
	const location = window.location.pathname

	const menus = [
		{
			href: '/home',
			icon: <HomeIcon classes="w-7 h-7 lg:w-6 lg:h-6" />,
			innerText: 'Home',
		},
		{
			href: '/new',
			icon: <PlusIcon classes="w-7 h-7 lg:w-6 lg:h-6" />,
			innerText: 'Add movements',
		},
		{
			href: '/movements',
			icon: <ArrowsUpDown classes="w-7 h-7 lg:w-6 lg:h-6" />,
			innerText: 'All movements',
		},
	]

	return (
		<aside className="fixed bottom-0 z-50 w-full lg:relative flex flex-col items-center gap-2 lg:ml-10 lg:my-10 lg:mr-0 lg:py-10 text-black bg-white border-2 border-grey lg:rounded-2xl lg:w-72 font-latoFont">
			<nav className="flex w-full">
				<ul className="flex lg:flex-col w-full lg:gap-4">
					{menus.map(menu => {
						const { href, icon, innerText } = menu

						return (
							<Link
								to={href}
								key={innerText}
								className="flex w-1/3 lg:w-full lg:px-6 justify-center items-center"
							>
								<li
									className={`flex items-center justify-center lg:justify-start gap-2 w-full h-full px-4 lg:py-2 py-4 duration-200 lg:rounded-xl hover:bg-grey ${
										location === href
											? 'bg-blue-500 text-white pointer-events-none'
											: null
									}`}
								>
									{icon}
									<p className="hidden lg:flex">{innerText}</p>
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
