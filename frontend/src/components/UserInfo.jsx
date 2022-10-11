const UserInfo = ({ logout, loggedUser }) => {
	return (
		<div className="absolute z-50 flex flex-col items-center bg-white border shadow-md w-fit h-fit -right-2 top-10 border-grey rounded-xl">
			<div className="flex flex-col items-center gap-2">
				<div className="relative flex items-center justify-center w-56 group-hover:opacity-10">
					<img
						src={
							'https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/user-244.png'
						}
						alt="user"
						className="object-cover"
					/>
				</div>
				<div className="flex flex-col items-center w-full gap-2 px-6">
					<p className="text-xl font-semibold font-quicksand">
						{loggedUser.name}
					</p>
					<p className="text-md">{loggedUser.email}</p>
				</div>
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
	)
}

export default UserInfo
