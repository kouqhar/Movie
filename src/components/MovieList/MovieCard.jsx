/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const { VITE_APP_API_BASE_IMAGE_URL } = import.meta.env;

//  Styles
import styles from "./styles/styles.module.css";

const MovieCard = ({ title, id, poster_path, vote_average }) => {
  const displayError = "Information Not Set!!!";
  return (
    <Link to={`/movie/${id}`}>
      <div className={styles.Card}>
        <div className={styles.Card__poster}>
          <img
            src={`${VITE_APP_API_BASE_IMAGE_URL}${poster_path}`}
            alt={title}
            className={styles.Card__poster___image}
          />
        </div>
        <p className={styles.Card__rating}>{vote_average.toFixed(1)}</p>

        <div className={styles.Card__details}>
          <p className={styles.Card__details___title}>
            {title !== "" ? title : displayError}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
