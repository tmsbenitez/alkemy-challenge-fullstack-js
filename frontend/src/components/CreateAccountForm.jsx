import { useState } from 'react'

// Icons
import { WarningIcon, CheckIcon, EyeIcon, CloseEyeIcon } from './design/Icons'

const CreateAccountForm = props => {
	const { newUser, refreshState, createNewUser, success, errorMessage, error } =
		props
	const [showPassword, setShowPassword] = useState(false)

	return (
		<div className="relative flex flex-col justify-center gap-4 px-12 py-6 bg-white border-2 shadow-xl rounded-2xl font-latoFont border-grey">
			<h1 className="text-2xl font-bold text-center font-quicksand">
				Create Account
			</h1>
			<form className="flex flex-col gap-4 w-fit" onSubmit={createNewUser}>
				<div className="flex flex-col gap-2 w-fit">
					<label>Username *</label>
					<input
						className="w-64 p-1 duration-200 border-2 rounded-lg outline-none border-grey focus:border-blue-500"
						onChange={refreshState}
						name="username"
						type="text"
						value={newUser.username}
					/>
				</div>
				<div className="flex flex-col gap-2 w-fit">
					<label>Name *</label>
					<input
						className="w-64 p-1 duration-200 border-2 rounded-lg outline-none border-grey focus:border-blue-500"
						onChange={refreshState}
						name="name"
						type="text"
						value={newUser.name}
					/>
				</div>
				<div className="flex flex-col gap-2 w-fit">
					<label>Email *</label>
					<input
						className="w-64 p-1 duration-200 border-2 rounded-lg outline-none border-grey focus:border-blue-500"
						onChange={refreshState}
						name="email"
						type="text"
						pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
						value={newUser.email}
						placeholder="email@example.com"
					/>
				</div>
				<div className="relative flex flex-col gap-2 w-fit">
					<label>Password *</label>
					<input
						className="w-64 p-1 duration-200 border-2 rounded-lg outline-none border-grey focus:border-blue-500"
						onChange={refreshState}
						name="password"
						type={showPassword ? 'text' : 'password'}
						value={newUser.password}
						minLength={4}
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
				{success ? (
					<p className="flex items-center justify-center gap-1 text-green">
						<CheckIcon />
						User created, redirecting to LogIn...
					</p>
				) : null}
				{error && !success ? (
					<p className="flex items-center justify-center gap-1 text-red">
						<WarningIcon /> {errorMessage}
					</p>
				) : null}
				<button
					type="submit"
					className="flex items-center justify-center gap-1 px-6 py-1 duration-200 border-2 rounded cursor-pointer border-grey bg-grey hover:bg-white hover:text-blue-500"
				>
					Create Account
				</button>
				<div className="flex flex-col gap-4">
					<p className="text-center">You already have an account?</p>
					<a
						href="/"
						className="flex items-center justify-center gap-1 px-6 py-1 duration-200 border-2 rounded cursor-pointer border-grey bg-grey hover:bg-white hover:text-blue-500"
					>
						Log In
					</a>
				</div>
			</form>
		</div>
	)
}

export default CreateAccountForm
