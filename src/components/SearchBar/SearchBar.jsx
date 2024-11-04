import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

// Styles
import styles from "./styles/styles.module.css";

const SearchBar = () => {
  const { query, setQuery, setSearchHistory } = useContext(MovieContext);

  const handleSearch = (e) => {
    const value = e.target.value;

    setQuery(value);
    setSearchHistory((prev) => [...new Set([value, ...prev])].slice(0, 10));
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search movies..."
      />
      <div onClick={() => setQuery("")} className={styles.clear}>
        X
      </div>
    </>
  );
};

export default SearchBar;
