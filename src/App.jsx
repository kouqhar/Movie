import { createBrowserRouter, RouterProvider } from "react-router-dom";
//  Components
import Layout from "./Hoc/Layout/Layout";

import { MovieList, MovieDetails, NoMatch } from "./Routes";

import MovieProvider from "./context/MovieContext";

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <MovieList />,
      },

      {
        path: "movie/:movieId",
        element: <MovieDetails />,
      },
    ],
  },

  {
    path: "*",
    element: <NoMatch />,
  },
]);

const App = () => {
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
};

export default App;
