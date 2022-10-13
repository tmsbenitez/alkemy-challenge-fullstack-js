// Icons
import { BudgetIcon } from './designs/Icons.jsx'

// Background
import { WhiteCircles } from './designs/Background.jsx'

const Budget = ({ budget }) => {
	return (
		<div className="relative flex items-center px-6 py-16 text-5xl font-semibold rounded-2xl bg-gradient-to-br from-blue-100 to-blue-500">
			<h2 className="z-10 flex items-center gap-4 font-quicksand">
				<BudgetIcon classes="w-16 h-16" />
				Budget: {budget}
			</h2>
			<WhiteCircles />
		</div>
	)
}

export default Budget
