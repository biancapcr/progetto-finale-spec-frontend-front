function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search-box">
      {/* input di ricerca per titolo */}
      <input
        type="text"
        placeholder="search by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
