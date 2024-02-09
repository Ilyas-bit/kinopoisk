// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/error-page.tsx";
import { MoviesPageWithSorting } from "./pages/movies-page-with-sorting.tsx";
import { App } from "./App.tsx";
import { store } from "./redux/store/configure-store.ts";
import { MovieDetailsPage } from "./pages/movie-details-page.tsx";

const root = ReactDOM.createRoot(document.getElementById("root")!);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MoviesPageWithSorting /> },
      {
        path: "movie/:idFilm",
        element: <MovieDetailsPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
