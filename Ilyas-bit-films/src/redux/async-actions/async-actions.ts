import { useSelector } from "react-redux";
import { Dispatch } from "redux";
import {
  fetchMovies,
  getFavorites,
  getIdUser,
  getMovieListByType,
  movieSearch,
} from "../../api/request";
import {
  setArtistsListFailure,
  setArtistsListSuccess,
  setDetailsListFailure,
  setDetailsListSuccess,
  setFavoritesFailure,
  setFavoritesSuccess,
  setIdUserFailure,
  setIdUserSuccess,
  setMovieListFailure,
  setMovieListSuccess,
} from "../actions/user-actions";
import {
  getCategory,
  getCurrentPageNumber,
  getEndDate,
  getIdFilm,
  getIdUserRedux,
  getSearchTerm,
  getSelectedGenres,
  getStartDate,
  getUserToken,
} from "../selectors/selectors";
import { Genre } from "../../interfaces/list-reducer-types";
export const useFetchFavoriteList = () => {
  const userToken = useSelector(getUserToken);
  const userID = useSelector(getIdUserRedux);
  return async (dispatch: Dispatch) => {
    try {
      const data = await getFavorites(userToken ?? "", userID ?? 0);
      dispatch(setFavoritesSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(setFavoritesFailure((error as Error).message));
    }
  };
};

export const useFetchMovieList = () => {
  const userToken = useSelector(getUserToken);
  const currentPageNumber = useSelector(getCurrentPageNumber);
  const selectedСategory = useSelector(getCategory);
  const selectedGenres = useSelector(getSelectedGenres);
  const userID = useSelector(getIdUserRedux);
  const searchTerm = useSelector(getSearchTerm);
  const startDate = useSelector(getStartDate);
  const endDate = useSelector(getEndDate);
  function extractIds(arr: Genre[]) {
    return arr.map((item) => item.id);
  }
  const ids = extractIds(selectedGenres ?? []);
  return async (dispatch: Dispatch) => {
    try {
      if (
        selectedСategory === "popularity.desc" ||
        selectedСategory === "vote_count.desc"
      ) {
        const data = await fetchMovies(
          userToken ?? "",
          currentPageNumber ?? 1,
          startDate ?? "",
          endDate ?? "",
          selectedСategory,
          ids ?? []
        );
        dispatch(setMovieListSuccess(data));
      }
      if (selectedСategory === "search") {
        const data = await movieSearch(
          userToken ?? "",
          searchTerm ?? "",
          currentPageNumber ?? 1
        );
        dispatch(setMovieListSuccess(data));
      }
      if (selectedСategory === "favorites") {
        const data = await getFavorites(userToken ?? "", userID ?? 0);
        dispatch(setMovieListSuccess(data));
      }
    } catch (error) {
      console.log(error);
      dispatch(setMovieListFailure((error as Error).message));
    }
  };
};

export const useFetchDetailsList = () => {
  const userToken = useSelector(getUserToken);
  const idFilmRedux = useSelector(getIdFilm);
  return async (dispatch: Dispatch) => {
    try {
      const data = await getMovieListByType(
        "details",
        idFilmRedux ?? 0,
        userToken || ""
      );
      dispatch(setDetailsListSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(setDetailsListFailure((error as Error).message));
    }
  };
};

export const useFetchArtistsList = () => {
  const userToken = useSelector(getUserToken);
  const idFilmRedux = useSelector(getIdFilm);
  return async (dispatch: Dispatch) => {
    try {
      const data = await getMovieListByType(
        "artists",
        idFilmRedux ?? 0,
        userToken || ""
      );
      dispatch(setArtistsListSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(setArtistsListFailure((error as Error).message));
    }
  };
};

export const useFetchIdUser = () => {
  const userToken = useSelector(getUserToken);
  return async (dispatch: Dispatch) => {
    try {
      const data = await getIdUser(userToken ?? "");
      dispatch(setIdUserSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(setIdUserFailure((error as Error).message));
    }
  };
};
