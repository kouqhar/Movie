/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { getMovies } from "../utils/apis";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [query, setQuery] = useState("");
  const [pagination, setPagination] = useState(1);
  const [totalPageCounter, setTotalPageCounter] = useState();

  useEffect(() => {
    const fetchMovies = async (p) => {
      try {
        setLoading(true);
        const response = await getMovies(p);
        setMovies(response.data?.results);
        setTotalPageCounter(response.data?.total_pages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    const option = {
      page: pagination,
    };
    fetchMovies(option);
  }, [pagination]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        loading,
        error,
        searchHistory,
        setSearchHistory,
        query,
        setQuery,
        pagination,
        setPagination,
        totalPageCounter,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
