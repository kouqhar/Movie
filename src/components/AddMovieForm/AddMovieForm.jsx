/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MovieContext } from "../../context/MovieContext";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Movie Title"
        required
      />
      <button type="submit">Add Movie</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default AddMovieForm;
