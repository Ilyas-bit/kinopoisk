import { RootState } from "../../reducers/index";
import { Genre } from "../../interfaces/list-reducer-types";

// user state
export const getUserToken = (state: RootState): string | null =>
  state.user.token;

export const getUserId = (state: RootState): object | null => state.list.idUser;

export const getIdFilm = (state: RootState): number | null => state.user.idFilm;

// filters state
export const getCurrentPageNumber = (state: RootState): number | null =>
  state.filters.currentPageNumber;

export const getCategory = (state: RootState): string | null =>
  state.filters.category;

export const getSearchTerm = (state: RootState): string | null =>
  state.filters.searchTerm;

export const getSelectedGenres = (state: RootState): Genre[] | null =>
  state.filters.selectedGenres;

export const getStartDate = (state: RootState): string | null =>
  state.filters.startDate;

export const getEndDate = (state: RootState): string | null =>
  state.filters.endDate;

// list state
export const getTotalPages = (state: RootState): number | null =>
  state.list.movieList ? state.list.movieList.data.total_pages : null;

export const getMovieList = (state: RootState): object | null =>
  state.list.movieList;

export const getIdUserRedux = (state: RootState): number | null =>
  state.list.idUser;

export const getFavoritesRedux = (state: RootState): object | null =>
  state.list.favorites;

export const getDetailsList = (state: RootState): object | null =>
  state.list.detailsList;

export const getArtistsList = (state: RootState): object | null =>
  state.list.artistsList;
