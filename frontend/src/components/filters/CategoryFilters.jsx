const CategoryFilters = ({ filter, setFilter }) => {
	const options = [
		{ value: 'All' },
		{ value: 'No category' },
		{ value: 'Shopping' },
		{ value: 'Entertainment' },
		{ value: 'Restaurants and bars' },
		{ value: 'Health and sports' },
		{ value: 'Services' },
		{ value: 'Market' },
		{ value: 'Transport' },
		{ value: 'Holidays' },
	]

	const handleChange = ({ target }) => {
		target.value === 'All'
			? setFilter({ ...filter, category: null })
			: setFilter({ ...filter, category: target.value })
	}

	return (
		<div className="flex items-center">
			<div className="flex gap-2 items-center">
				<label className="font-quicksand font-medium">Category:</label>
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

export default CategoryFilters
