import { useState, useEffect } from 'react'

const LoginForm = props => {
	// Destructure props
	const { validateUser, refreshState, user, errorMessage } = props

	// LoginForm State
	const [error, setError] = useState(false)

	// Render error

	useEffect(() => {
		if (errorMessage !== '') setError(true)
	}, [errorMessage])

	return (
		<div className="flex flex-col items-center gap-2 p-10 border border-black font-latoFont">
			<h1 className="text-2xl">Log In</h1>
			<form
				className="flex flex-col items-center gap-2 p-4"
				onSubmit={validateUser}
			>
				<div className="flex gap-2">
					<label className="w-full">Username</label>
					<input
						className="border border-black"
						onChange={refreshState}
						name="username"
						value={user.username}
					/>
				</div>
				<div className="flex gap-2">
					<label className="w-full">Password</label>
					<input
						className="border border-black"
						onChange={refreshState}
						name="password"
						value={user.password}
					/>
				</div>
				<div className="flex justify-between w-full">
					<a href="/api/create" className="px-4 py-1 border border-black">
						Create Account
					</a>
					<input
						type="submit"
						className="px-4 py-1 border border-black cursor-pointer"
					/>
				</div>
			</form>
			{error ? <p>{errorMessage}</p> : null}
		</div>
	)
}

export default LoginForm
