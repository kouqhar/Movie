import { useState, useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

const SearchBar = () => {
  const { setQuery, setSearchHistory } = useContext(MovieContext);
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setQuery(value);
    setSearchHistory((prev) => [...new Set([value, ...prev])].slice(0, 10));
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleSearch}
      placeholder="Search movies..."
    />
  );
};

export default SearchBar;
