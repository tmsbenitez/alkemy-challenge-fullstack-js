const Header = () => {
	const logout = () => {
		window.localStorage.clear()
		window.location.href = '/'
	}

	return (
		<header>
			<button onClick={logout}>Logout</button>
		</header>
	)
}

export default Header
