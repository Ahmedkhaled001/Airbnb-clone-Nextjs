
const SearchFilters = () => {
    const filters = [
        'Cancellation Flexibility',
        'Type of Place',
        'Price',
        'Rooms and Beds',
        'More filters',
      ];
  return (
    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
        {filters.map(filter => (
            <button type="button" key={filter} className="filter-btn">{filter}</button>
        ))}
    </div>
  )
}

export default SearchFilters