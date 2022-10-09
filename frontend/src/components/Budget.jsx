// Icons
import { BudgetIcon } from './Icons.jsx'

const Budget = props => {
	const { budget } = props

	return (
		<div className="flex px-6 py-16 text-5xl font-semibold rounded-2xl bg-gradient-to-br from-blue-100 to-blue-500">
			<h2 className="flex items-center gap-4 font-quicksand">
				<BudgetIcon classes="w-16 h-16" />
				Budget: {budget}
			</h2>
		</div>
	)
}

export default Budget
