const TypeFilters = ({ filter, setFilter }) => {
	const options = [{ value: 'All' }, { value: 'Income' }, { value: 'Egress' }]

	const handleChange = ({ target }) => {
		target.value === 'All'
			? setFilter({ ...filter, type: null })
			: setFilter({ ...filter, type: target.value })
	}

	return (
		<div className="flex items-center">
			<div className="flex gap-2 items-center">
				<label className="font-quicksand font-medium">Type:</label>
				<select
					className="border-2 border-grey p-1 rounded"
					onChange={handleChange}
				>
					{options.map(({ value }) => (
						<option value={value} key={value}>
							{value}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}

export default TypeFilters
