import { useState, useRef } from 'react'

// Components
import UserInfo from './UserInfo.jsx'

// Icons
import { UserIcon } from './Icons.jsx'

const Header = () => {
	const [userToggle, setUserToggle] = useState(false)
	const wrapperRef = useRef(null)

	const loggedUser = JSON.parse(window.localStorage.getItem('LoggedUser'))

	const logout = () => {
		window.localStorage.clear()
		window.location.href = '/'
	}

	const clickAwayListener = ref => {
		const handleClickAway = event => {
			if (ref.current && !ref.current.contains(event.target)) {
				setUserToggle(false)
			}
		}

		document.addEventListener('mouseup', handleClickAway)
	}

	clickAwayListener(wrapperRef)

	return (
		<header className="flex items-center justify-between w-full px-6 py-2 bg-white border-2 border-grey rounded-2xl">
			<div>
				<a
					href="/home"
					className="text-xl font-extrabold duration-200 font-quicksand hover:text-blue-500"
				>
					Budget Manager
				</a>
			</div>
			<div ref={wrapperRef} className="relative flex items-center">
				<button
					onClick={() => setUserToggle(!userToggle)}
					className="flex items-center gap-1 duration-200 hover:text-blue-500"
				>
					<UserIcon classes="w-5 h-5" />
					{loggedUser.username}
				</button>
				{userToggle ? (
					<UserInfo
						clickAwayListener={clickAwayListener}
						logout={logout}
						loggedUser={loggedUser}
					/>
				) : null}
			</div>
		</header>
	)
}

export default Header
