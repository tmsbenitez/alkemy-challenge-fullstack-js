const Background = () => {
	return (
		<div className="absolute w-full h-full -z-10">
			<div></div>
			<svg width="100%" height="100vh">
				<circle
					r="30%"
					cx="10%"
					cy="10%"
					className="fill-blue-100 blur-lg opacity-10"
				/>
				<circle
					r="20%"
					cx="90%"
					cy="20%"
					className="fill-blue-100 blur-lg opacity-10"
				/>
				<circle
					r="20%"
					cx="45%"
					cy="65%"
					className="fill-blue-100 blur-lg opacity-10"
				/>
			</svg>
		</div>
	)
}

export const WhiteCircles = () => {
	return (
		<div className="absolute right-0 h-full opacity-30">
			<svg className="w-full h-full">
				<circle
					r="30%"
					cx="100%"
					cy="100%"
					fill="none"
					strokeWidth="0.2rem"
					stroke="white"
					className="absolute"
				/>
				<circle
					r="50%"
					cx="80%"
					cy="80%"
					fill="none"
					strokeWidth="0.2rem"
					stroke="white"
					className="absolute"
				/>
				<circle
					r="50%"
					cx="100%"
					cy="50%"
					fill="none"
					strokeWidth="0.2rem"
					stroke="white"
					className="absolute"
				/>
				<circle
					r="70%"
					cx="70%"
					cy="70%"
					fill="none"
					strokeWidth="0.2rem"
					stroke="white"
					className="absolute"
				/>
				<circle
					r="5%"
					cx="10%"
					cy="2%"
					fill="none"
					strokeWidth="0.2rem"
					stroke="white"
					className="absolute"
				/>
			</svg>
		</div>
	)
}

export const BlueCircles = () => {
	return (
		<div className="absolute right-0 h-full w-[50%] opacity-20">
			<svg className="w-full h-full">
				<circle
					r="30%"
					cx="100%"
					cy="100%"
					fill="none"
					strokeWidth="0.2rem"
					stroke="#b5c7f7"
					className="absolute"
				/>
				<circle
					r="50%"
					cx="80%"
					cy="80%"
					fill="none"
					strokeWidth="0.2rem"
					stroke="#b5c7f7"
					className="absolute"
				/>
				<circle
					r="50%"
					cx="100%"
					cy="50%"
					fill="none"
					strokeWidth="0.2rem"
					stroke="#b5c7f7"
					className="absolute"
				/>
				<circle
					r="70%"
					cx="70%"
					cy="70%"
					fill="none"
					strokeWidth="0.2rem"
					stroke="#b5c7f7"
					className="absolute"
				/>
				<circle
					r="5%"
					cx="10%"
					cy="2%"
					fill="none"
					strokeWidth="0.2rem"
					stroke="#b5c7f7"
					className="absolute"
				/>
			</svg>
		</div>
	)
}

export default Background
