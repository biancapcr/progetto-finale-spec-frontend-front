function SortSelect({ sortOption, setSortOption }) {
  return (
    <div className="sort-box">
      {/* select per l'ordinamento alfabetico */}
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="">default order</option>
        <option value="title-asc">title a-z</option>
        <option value="title-desc">title z-a</option>
        <option value="category-asc">category a-z</option>
        <option value="category-desc">category z-a</option>
      </select>
    </div>
  );
}

export default SortSelect;
