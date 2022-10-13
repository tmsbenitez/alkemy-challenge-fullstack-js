import { useState, useEffect } from 'react'

// Icons
import { EyeIcon, CloseEyeIcon, WarningIcon } from './design/Icons'

const LoginForm = ({ validateUser, refreshState, user, errorMessage }) => {
	const [error, setError] = useState(false)
	const [showPassword, setShowPassword] = useState(false)

	// Render error
	useEffect(() => {
		if (errorMessage !== '') setError(true)
	}, [errorMessage])

	return (
		<div className="relative flex flex-col justify-center gap-4 px-12 py-6 bg-white border-2 shadow-xl rounded-2xl font-latoFont border-grey">
			<h1 className="text-2xl font-bold text-center font-quicksand">Log In</h1>
			<form className="flex flex-col gap-4 w-fit" onSubmit={validateUser}>
				<div className="flex flex-col gap-2 w-fit">
					<label>Email</label>
					<input
						className="w-64 p-1 duration-200 border-2 rounded-lg outline-none border-grey focus:border-blue-500"
						onChange={refreshState}
						name="email"
						type="email"
						pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
						value={user.email}
					/>
				</div>
				<div className="relative flex flex-col gap-2 w-fit">
					<label>Password</label>
					<input
						className="w-64 p-1 duration-200 border-2 rounded-lg outline-none border-grey focus:border-blue-500"
						onChange={refreshState}
						name="password"
						type={showPassword ? 'text' : 'password'}
						value={user.password}
					/>
					<button
						className="absolute bottom-2 right-2"
						onClick={event => {
							event.preventDefault()
							setShowPassword(!showPassword)
						}}
					>
						{!showPassword ? (
							<EyeIcon classes="w-5 h-5" />
						) : (
							<CloseEyeIcon classes="w-5 h-5" />
						)}
					</button>
				</div>
				{error ? (
					<p className="flex items-center justify-center gap-1 text-red">
						<WarningIcon /> {errorMessage}
					</p>
				) : null}
				<div className="flex flex-col justify-between w-full gap-6">
					<button
						type="submit"
						className="flex items-center justify-center gap-1 px-6 py-1 duration-200 border-2 rounded cursor-pointer border-grey bg-grey hover:bg-white hover:text-blue-500"
					>
						Log In
					</button>
					<div className="flex flex-col gap-4">
						<p className="text-center">You don't have an account?</p>
						<a
							href="/api/create"
							className="flex items-center justify-center gap-1 px-6 py-1 duration-200 border-2 rounded cursor-pointer border-grey bg-grey hover:bg-white hover:text-blue-500"
						>
							Create Account
						</a>
					</div>
				</div>
			</form>
		</div>
	)
}

export default LoginForm
