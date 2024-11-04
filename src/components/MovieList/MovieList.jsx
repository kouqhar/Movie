import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/MovieContext";
import SearchBar from "../SearchBar";
import AddMovieForm from "../AddMovieForm";

// Styles
import styles from "./styles/styles.module.css";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { movies, loading, error, query, pagination, setPagination } =
    useContext(MovieContext);
  const [showAddMovie, setShowAddMovie] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPagination(page);
  }, [setPagination, page]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredMovies = movies?.results.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  // console.log("movies ", movies);

  const previousPage = () => {
    if (page - 1 < 1) return;

    setPage((prevstate) => (prevstate -= 1));
  };

  const nextPage = () => {
    if (page + 1 > movies?.total_pages) return;

    setPage((prevstate) => (prevstate += 1));
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
                movies?.total_pages ? movies?.total_pages : "No content"
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
