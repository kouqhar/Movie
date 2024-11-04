import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { findById } from "../../utils/apis";

const { VITE_APP_API_BASE_IMAGE_URL } = import.meta.env;

// Styles
import styles from "./styles/styles.module.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("Params ", movieId);

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

  const goBack = () => navigate(-1);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={styles.container} key={movie.id}>
      <button className={styles.container_goBack} onClick={goBack}>
        Go Back
      </button>
      <div className={styles.container_content}>
        <div className={styles.container_content__details}>
          <h1>{movie.title}</h1>
          <img
            src={`${VITE_APP_API_BASE_IMAGE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className={styles.container_content__info}>
          <p className={styles.container_content__info___overview}>
            {movie.overview}
          </p>
          <div className={styles.container_content__info___details}>
            <p>{movie.release_date}</p>
            <p>{movie.status}</p>
            <p>{movie.vote_average}</p>
            <p>{movie.vote_count} votes</p>
          </div>
          {/* Genres */}
          <div className={styles.container_content__info___genres}>
            {movie?.genres?.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
