const Budget = props => {
	const { budget } = props

	return (
		<div className="flex px-6 py-16 text-5xl font-semibold rounded-2xl bg-gradient-to-br from-blue-100 to-blue-500">
			<h2 className="flex items-center gap-4 font-quicksand">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-16 h-16"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
					/>
				</svg>
				Budget: {budget}
			</h2>
		</div>
	)
}

export default Budget
