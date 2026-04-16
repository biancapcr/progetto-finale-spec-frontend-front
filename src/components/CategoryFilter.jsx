function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="filter-box">
      {/* select per filtrare i profumi per categoria */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All categories</option>
        <option value="sweet">Sweet</option>
        <option value="floral">Floral</option>
        <option value="citrus">Citrus</option>
        <option value="woody">Woody</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
