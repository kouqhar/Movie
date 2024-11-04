/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MovieContext } from "../../context/MovieContext";

import styles from "./styles/styles.module.css";

const [loremOne, loremTwo] = [
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias laudantium ipsam impedit harum repellat, ratione animi. Ipsum perspiciatis voluptatem facilis quod placeat! Expedita eum sed maxime at inventore distinctio odio?",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rerum iure quia, placeat culpa repudiandae numquam architecto, dolorem aut obcaecati repellat provident ipsum expedita necessitatibus dolores, eius distinctio minus quibusdam.",
];

const genres = [
  [
    { id: 12, name: "Action" },
    { id: 71, name: "Sci fiction" },
  ],
  [
    { id: 51, name: "Horror" },
    { id: 61, name: "Drama" },
  ],
];
const overview = [loremOne, loremTwo];
const release_date = [Date.now(), new Date(2023 - 4 - 20)];
const vote_average = [5.8, 8.4];
const status = ["Released", "Un-Released"];
const poster_path = [
  "/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
  "/7fR3KxswtY8OHHZuOUB9td58CRX.jpg",
];

const AddMovieForm = ({ onClose }) => {
  const { setMovies } = useContext(MovieContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const randomNumber = Math.floor(Math.random() * 2);
    const capitalizedTitle = title
      .trim()
      .split(" ")
      .map((word) => {
        const remainingWord = word.slice(1);
        const newWord = word[0].toUpperCase() + remainingWord;

        return newWord;
      })
      .join(" ")
      .trim();

    const newMovie = {
      id: Date.now(), // Dummy Id
      title: capitalizedTitle,
      overview: overview[randomNumber],
      release_date: release_date[randomNumber],
      vote_average: vote_average[randomNumber],
      status: status[randomNumber],
      genres: genres[randomNumber],
      poster_path: poster_path[randomNumber],
    };

    setMovies((prev) => [newMovie, ...prev]);
    setTitle("");
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
