// Icons
import { WhiteCircles } from './Design/Background.jsx'
import { BudgetIcon } from './Design/Icons.jsx'

const Budget = ({ budget }) => {
	return (
		<div className="flex px-6 py-16 text-5xl items-center font-semibold relative rounded-2xl bg-gradient-to-br from-blue-100 to-blue-500">
			<h2 className="flex items-center gap-4 font-quicksand z-10">
				<BudgetIcon classes="w-16 h-16" />
				Budget: {budget}
			</h2>
			<WhiteCircles />
		</div>
	)
}

export default Budget
