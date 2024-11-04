/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MovieContext } from "../../context/MovieContext";

import styles from "./styles/styles.module.css";

const AddMovieForm = ({ onClose }) => {
  const { setMovies } = useContext(MovieContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add movie logic here
    setMovies((prev) => [...prev, { id: Date.now(), title }]); // Dummy ID
    onClose();
  };

  return (
    <div className={styles.form_container}>
      <form className={styles.form_container__content} onSubmit={handleSubmit}>
        <div className={styles.form_container__content___group}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Movie Title"
            required
          />
          <div className={styles.form_container__content___group____cta}>
            <button type="submit">Add Movie</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMovieForm;
