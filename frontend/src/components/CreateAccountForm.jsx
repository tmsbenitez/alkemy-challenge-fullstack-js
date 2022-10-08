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
			placeholder: 'Username',
		},
		{
			label: 'Name',
			type: 'text',
			min: null,
			name: 'name',
			value: newUser.name,
			placeholder: 'Name',
		},
		{
			label: 'Email',
			type: 'text',
			min: null,
			name: 'email',
			value: newUser.email,
			placeholder: 'Email',
		},
		{
			label: 'Password',
			type: 'text',
			min: null,
			name: 'password',
			value: newUser.password,
			placeholder: 'Password',
		},
	]

	return (
		<div className="flex flex-col items-center gap-2 p-10 border border-black font-latoFont">
			<h1 className="text-2xl">Create Account</h1>
			<form
				className="flex flex-col items-center gap-2 p-4"
				onSubmit={createNewUser}
			>
				{inputs.map(input => {
					const { label, type, min, name, value, placeholder } = input

					return (
						<div key={name} className="flex items-center gap-2">
							<label className="w-full">{label}</label>
							<input
								type={type}
								min={min}
								className="p-1 border rounded border-neutral-900"
								value={value}
								onChange={refreshState}
								name={name}
								placeholder={placeholder}
							/>
						</div>
					)
				})}
				<input
					type="submit"
					className="px-4 py-1 ml-auto border border-black cursor-pointer"
				/>
				{success ? <p>User created, redirecting to LogIn...</p> : null}
				{error && !success ? <p>{errorMessage}</p> : null}
			</form>
		</div>
	)
}

export default CreateAccountForm
