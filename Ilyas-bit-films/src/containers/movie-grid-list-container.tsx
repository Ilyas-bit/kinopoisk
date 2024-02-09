// containers/movie-grid-list-container.tsx
import React, { useEffect } from "react";
import {
  fetchMovies,
  getFavorites,
  getMovieListByType,
  movieSearch,
} from "../api/request";
import { MovieGridList } from "../components/movie-grid-list/movie-grid-list";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPageNumber,
  getCategory,
  getMovieList,
  getUserToken,
  getIdUserRedux,
  getFavoritesRedux,
  getSearchTerm,
  getSelectedGenres,
  getStartDate,
  getEndDate,
} from "../redux/selectors/selectors";
import {
  setCategory,
  setFavorites,
  setIdFilm,
  setMovieList,
} from "../redux/actions/user-actions";
import { Box, CircularProgress } from "@mui/material";
import {
  useFetchFavoriteList,
  useFetchMovieList,
} from "../redux/async-actions/async-actions";

export const MovieGridListContainer: React.FC = () => {
  const dispatchRedux = useDispatch();
  const currentPageNumber = useSelector(getCurrentPageNumber);
  const selectedСategory = useSelector(getCategory);
  const userToken = useSelector(getUserToken);
  const movieList = useSelector(getMovieList);
  const userID = useSelector(getIdUserRedux);
  const favoritesList = useSelector(getFavoritesRedux);
  const searchTerm = useSelector(getSearchTerm);
  const selectedGenres = useSelector(getSelectedGenres);
  const startDate = useSelector(getStartDate);
  const endDate = useSelector(getEndDate);

  const changeIdFilm = (newId: number) => {
    dispatchRedux(setIdFilm(newId));
  };

  // useFetchMovieList
  const fetchMovieList = useFetchMovieList();
  const fetchFavoriteList = useFetchFavoriteList();

  useEffect(() => {
    if (!userID?.data?.id) {
      return;
    }
    dispatchRedux(fetchMovieList);
  }, [
    currentPageNumber,
    selectedСategory,
    searchTerm,
    userID?.data?.id,
    userID?.data,
    userToken,
    selectedGenres,
    startDate,
    endDate,
    dispatchRedux,
  ]);

  useEffect(() => {
    if (!userID) {
      return;
    }
    dispatchRedux(fetchFavoriteList);
  }, [
    userID,
    !userID?.data?.id,
    userToken,
    selectedСategory,
    currentPageNumber,
  ]);

  if (!favoritesList || !movieList || !userID?.data?.id) {
    return (
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <MovieGridList
      movieList={movieList.data.results}
      handleMovieClick={changeIdFilm}
    />
  );
};
