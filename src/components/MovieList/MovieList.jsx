import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context/MovieContext";
import SearchBar from "../SearchBar";
import AddMovieForm from "../AddMovieForm";

const { VITE_APP_API_BASE_IMAGE_URL } = import.meta.env;

const MovieList = () => {
  const { movies, loading, error, query, pagination, setPagination } =
    useContext(MovieContext);
  const [showAddMovie, setShowAddMovie] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => setPagination(page), [setPagination, page]);

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
    <div>
      <SearchBar />
      <button onClick={() => setShowAddMovie(true)}>Add New</button>
      {showAddMovie && <AddMovieForm onClose={() => setShowAddMovie(false)} />}
      {!loading && (
        <ul>
          {filteredMovies?.map(({ id, title, poster_path, vote_average }) => (
            <li key={id}>
              <Link to={`/movie/${id}`}>
                <h1>{title}</h1>
                <img
                  src={`${VITE_APP_API_BASE_IMAGE_URL}${poster_path}`}
                  alt={title}
                />
                <p>Rating: {vote_average}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <button onClick={previousPage}>prev</button>
      <span> {`${pagination} / ${movies?.total_pages}`} </span>
      <button onClick={nextPage}>next</button>
    </div>
  );
};

export default MovieList;
