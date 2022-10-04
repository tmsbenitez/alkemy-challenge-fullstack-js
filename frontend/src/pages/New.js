import { useState } from 'react'

// Components
import Form from '../components/Form'
import Sidebar from '../components/Sidebar'

const New = props => {
	// Destructure props
	const { setCall } = props

	return (
		<div className='flex'>
      <Sidebar />
			<Form setCall={setCall} />
		</div>
	)
}

export default New
