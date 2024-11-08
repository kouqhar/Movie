import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
    setQuery,
    pagination,
    setPagination,
  } = useContext(MovieContext);
  const [showAddMovie, setShowAddMovie] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ page: pagination }, { replace: true });
  }, [pagination, setSearchParams]);

  useEffect(() => {
    const filteredMovies = movies?.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredMovies(filteredMovies);

    return () => filteredMovies;
  }, [query, movies]);

  if (error) return <div>Error: {error}</div>;

  const previousPage = () => {
    if (pagination - 1 < 1) return;

    setPagination((prevState) => (prevState -= 1));
  };

  const nextPage = () => {
    if (pagination + 1 > movies?.total_pages) return;

    setPagination((prevState) => (prevState += 1));
  };

  return (
    <>
      <div className={styles.header_container}>
        <header className={styles.header_container__content}>
          <div className={styles.header_container__content___search}>
            <SearchBar />
            {query.length > 0 && (
              <div
                className={styles.header_container__content___search____suggest}
              >
                {filteredMovies?.map(({ id, title }, idx) => (
                  <p onClick={() => setQuery(title)} key={`${id}-${idx}`}>
                    {title}
                  </p>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => setShowAddMovie(true)}>Add New</button>
        </header>
      </div>
      <div className={styles.container}>
        {showAddMovie && (
          <AddMovieForm onClose={() => setShowAddMovie(false)} />
        )}
        {loading && <div className="loading">Loading Movie List...</div>}
        {!loading && filteredMovies?.length > 0 && (
          <ul className={styles.container_movies}>
            {filteredMovies?.map(({ id, title, poster_path, vote_average }) => {
              const props = { title, id, poster_path, vote_average };

              return <MovieCard key={id} {...props} />;
            })}
          </ul>
        )}

        {!loading && filteredMovies.length < 1 && (
          <div className="loading">
            <h2>
              No content {query.length > 0 && `with this name ${query}`}{" "}
              found!!!{" "}
            </h2>
          </div>
        )}

        <div className={styles.container_pagination}>
          <div className={styles.container_pagination__cta}>
            <button onClick={previousPage}>prev</button>
            <span>
              {" "}
              {`${!loading ? pagination : "loading..."} / ${
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
