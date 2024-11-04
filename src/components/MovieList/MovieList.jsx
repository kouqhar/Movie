import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/MovieContext";
import SearchBar from "../SearchBar";
import AddMovieForm from "../AddMovieForm";

// Styles
import styles from "./styles/styles.module.css";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const {
    movies,
    totalPageCounter,
    loading,
    error,
    query,
    pagination,
    setPagination,
  } = useContext(MovieContext);
  const [showAddMovie, setShowAddMovie] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [page, setPage] = useState(1);

  console.log("movies ", movies);

  useEffect(() => {
    setPagination(page);
  }, [setPagination, page]);

  useEffect(() => {
    const filteredMovies = movies?.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredMovies(filteredMovies);

    return () => filteredMovies;
  }, [query, movies]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const previousPage = () => {
    if (page - 1 < 1) return;

    setPage((prevState) => (prevState -= 1));
  };

  const nextPage = () => {
    if (page + 1 > movies?.total_pages) return;

    setPage((prevState) => (prevState += 1));
  };

  return (
    <>
      <div className={styles.header_container}>
        <header className={styles.header_container__content}>
          <SearchBar />
          <button onClick={() => setShowAddMovie(true)}>Add New</button>
        </header>
      </div>
      <div className={styles.container}>
        {showAddMovie && (
          <AddMovieForm onClose={() => setShowAddMovie(false)} />
        )}
        {!loading && (
          <ul className={styles.container_movies}>
            {filteredMovies?.map(({ id, title, poster_path, vote_average }) => {
              const props = { title, id, poster_path, vote_average };

              return <MovieCard key={id} {...props} />;
            })}
          </ul>
        )}

        <div className={styles.container_pagination}>
          <div className={styles.container_pagination__cta}>
            <button onClick={previousPage}>prev</button>
            <span>
              {" "}
              {`${pagination} / ${
                totalPageCounter ? totalPageCounter : "No content"
              }`}{" "}
            </span>
            <button onClick={nextPage}>next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
