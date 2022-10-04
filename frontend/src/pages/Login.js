const Login = () => {
	return (
		<main className="flex flex-col items-center justify-center h-screen">
			<div className="flex flex-col items-center gap-2 p-10 border border-black">
				<h1 className="text-2xl">Log In</h1>
				<form className="flex flex-col items-center gap-2 p-4">
					<div className="flex gap-2">
						<label className="w-full">Username</label>
						<input className="border border-black" />
					</div>
					<div className="flex gap-2">
						<label className="w-full">Password</label>
						<input className="border border-black" />
					</div>
					<input type="submit" className="px-4 py-1 ml-auto border border-black" />
				</form>
			</div>
		</main>
	)
}

export default Login
