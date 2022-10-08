import { useState } from 'react'

const Header = () => {
	const [userToggle, setUserToggle] = useState(false)

	const loggedUser = JSON.parse(window.localStorage.getItem('LoggedUser'))

	const logout = () => {
		window.localStorage.clear()
		window.location.href = '/'
	}

	return (
		<header className="flex items-center justify-between w-full px-6 py-2 bg-white border-2 border-grey rounded-2xl">
			<div>
				<h1 className="text-xl font-extrabold duration-200 font-quicksand">
					Budget Manager
				</h1>
			</div>
			<div className="relative flex items-center">
				<button
					href="/account"
					className="flex items-center gap-1 duration-200 hover:text-blue-500"
					onClick={() => setUserToggle(!userToggle)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-5 h-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
					{loggedUser.username}
				</button>
				{userToggle ? (
					<div className="absolute flex flex-col items-center w-56 bg-white border shadow-md h-fit -right-2 top-10 border-grey rounded-xl">
						<div className="flex flex-col items-center gap-2">
							<div className="relative flex items-center justify-center group-hover:opacity-10">
								<img
									src={
										'https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png'
									}
									alt="user"
									className="object-cover w-56"
								/>
							</div>
							<p className="text-xl font-semibold font-quicksand">
								{loggedUser.name}
							</p>
							<p className="text-md">{loggedUser.email}</p>
						</div>
						<button
							onClick={logout}
							className="flex items-center justify-center w-full gap-1 p-2 mt-4 duration-200 border-t hover:text-red border-grey font-latoFont"
						>
							Logout{' '}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
								/>
							</svg>
						</button>
					</div>
				) : null}
			</div>
		</header>
	)
}

export default Header
