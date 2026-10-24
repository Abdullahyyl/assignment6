function FilterForm({ filter, onFilterChange }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ margin: '16px 0' }}>
      <input
        type="text"
        placeholder="Filter by title"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </form>
  )
}

export default FilterForm
