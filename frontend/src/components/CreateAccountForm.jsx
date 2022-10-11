import { WarningIcon, CheckIcon } from './Design/Icons'

const CreateAccountForm = props => {
	// Destructure props
	const { newUser, refreshState, createNewUser, success, errorMessage, error } =
		props

	const inputs = [
		{
			label: 'Username',
			type: 'text',
			min: null,
			name: 'username',
			value: newUser.username,
		},
		{
			label: 'Name',
			type: 'text',
			min: null,
			name: 'name',
			value: newUser.name,
		},
		{
			label: 'Email',
			type: 'email',
			min: null,
			name: 'email',
			value: newUser.email,
		},
		{
			label: 'Password',
			type: 'text',
			min: null,
			name: 'password',
			value: newUser.password,
		},
	]

	return (
		<div className="relative flex flex-col justify-center gap-4 px-12 py-6 bg-white border-2 shadow-xl rounded-2xl font-latoFont border-grey">
			<h1 className="text-2xl font-bold text-center font-quicksand">
				Create Account
			</h1>
			<form className="flex flex-col gap-4 w-fit" onSubmit={createNewUser}>
				{inputs.map(input => {
					const { label, type, min, name, value } = input

					return (
						<div key={name} className="flex flex-col gap-2 w-fit">
							<label className="w-full">{label}</label>
							<input
								type={type}
								min={min}
								className="w-64 p-1 duration-200 border-2 rounded-lg outline-none border-grey focus:border-blue-500"
								value={value}
								onChange={refreshState}
								name={name}
							/>
						</div>
					)
				})}

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
