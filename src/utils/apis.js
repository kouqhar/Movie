import axios from "axios";

// Movie id,  https://api.themoviedb.org/3/movie/{movie_id}/images

// Env
const { VITE_MOVIE_API_DOMAIN, VITE_MOVIE_APP_DB_API_TOKEN } = import.meta.env;

const instance = axios.create({
  baseURL: VITE_MOVIE_API_DOMAIN,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${VITE_MOVIE_APP_DB_API_TOKEN}`,
  },
});

const defaultOptions = {
  params: {
    include_adult: "false",
    include_video: "false",
    language: "en-US",
    page: "1",
    sort_by: "popularity.desc",
  },
};

const getMovies = async (input) => {
  const { page } = input;
  const options = {
    ...defaultOptions,
    params: {
      ...defaultOptions.params,
      page,
    },
    method: "GET",
    url: `/discover/movie`,
  };
  try {
    let moviesUrl = await instance.request(options);
    return moviesUrl;
  } catch (err) {
    return `Error fetching movies - ${err.message}`;
  }
};

const searchMovie = async (input) => {
  const options = {
    ...defaultOptions,
    method: "GET",
    url: `/search/movie&query=${input}`,
  };
  try {
    let searchUrl = await instance.request(options);
    return searchUrl;
  } catch (err) {
    return `Error searching for this movie " ${input} " - ${err.message}`;
  }
};

const findById = async (movieId) => {
  const options = {
    ...defaultOptions,
    method: "GET",
    url: `/movie/${movieId}`,
  };
  try {
    let findUrl = await instance.request(options);
    return findUrl;
  } catch (err) {
    return `Error finding this movie by movieId " ${movieId} " - ${err.message}`;
  }
};

const filterMovies = async () => {
  const options = {
    ...defaultOptions,
    method: "GET",
    url: `/discover/movie`,
  };
  try {
    let moviesUrl = await instance.request(options);
    return moviesUrl;
  } catch (err) {
    return `Error fetching movies - ${err.message}`;
  }
};

export { getMovies, searchMovie, findById, filterMovies };
