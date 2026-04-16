function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="filter-box">
      {/* select per filtrare i profumi per categoria */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">all categories</option>
        <option value="sweet">sweet</option>
        <option value="floral">floral</option>
        <option value="citrus">citrus</option>
        <option value="woody">woody</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
