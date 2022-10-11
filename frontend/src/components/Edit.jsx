import { Link } from 'react-router-dom'

import { EditIcon } from './Design/Icons.jsx'

const Edit = ({ id }) => {
	return (
		<Link
			to={`/movements/${id}`}
			className="flex items-center justify-center w-32 gap-1 px-4 py-2 duration-200 border-2 rounded-l border-grey bg-grey hover:bg-white hover:text-blue-500"
		>
			<EditIcon classes="w-4 h-4" />
			Edit
		</Link>
	)
}

export default Edit
