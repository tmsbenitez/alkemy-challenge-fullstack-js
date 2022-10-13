// Icons
import { PlusIcon } from './design/Icons.jsx'

// Background
import { BlueCircles } from './design/Background.jsx'

const Placeholder = () => {
	return (
		<div className="relative flex flex-col items-center justify-center w-full h-full gap-8 p-16 bg-white border-2 rounded-xl border-grey">
			<h3 className="z-10 text-2xl">Nothing to show here</h3>
			<a
				href="/new"
				className="z-10 flex items-center justify-center gap-1 px-4 py-2 duration-200 border-2 rounded-l w-fit border-grey bg-grey hover:bg-white hover:text-blue-500"
			>
				<PlusIcon /> Add your first movement
			</a>
			<BlueCircles />
		</div>
	)
}

export default Placeholder
