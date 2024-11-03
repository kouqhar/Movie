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
  const [pagination, setPagination] = useState();

  useEffect(() => {
    const fetchMovies = async (q) => {
      try {
        const response = await getMovies(q);
        setMovies(response.data);
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
  }, [query, pagination]);

  return (
    <MovieContext.Provider
      value={{
        movies,
        loading,
        error,
        searchHistory,
        setSearchHistory,
        query,
        setQuery,
        pagination,
        setPagination,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
