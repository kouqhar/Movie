import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findById } from "../../utils/apis";

const { VITE_APP_API_BASE_IMAGE_URL } = import.meta.env;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async (movieId) => {
      try {
        const response = await findById(movieId);
        setMovie(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div key={movie.id}>
      <h1>{movie.title}</h1>
      <img
        src={`${VITE_APP_API_BASE_IMAGE_URL}${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <p>{movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Status: {movie.status}</p>
      {/* Genres */}
      {movie?.genres?.map((genre) => (
        <span key={genre.id}>{genre.name}</span>
      ))}
    </div>
  );
};

export default MovieDetails;
