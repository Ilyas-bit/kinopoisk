// constants.js

export const API_BASE_URL = "https://api.themoviedb.org/3";
export const LANGUAGE_PARAM = "language=ru";

export const MOVIE_GENRE_ENDPOINT = "/genre/movie/list";
export const MOVIE_LIST_ENDPOINT = "/movie/";
export const ARTISTS_ENDPOINT = "/credits";
export const ACCOUNT_ID_ENDPOINT = "/account/account_id";
export const FAVORITE_MOVIES_ENDPOINT = "/account/:account_id/favorite/movies";
export const ADD_FAVORITE_ENDPOINT = "/account/:account_id/favorite";
export const MOVIE_SEARCH_ENDPOINT = "/search/movie";

export const getUrl = (
  page: number,
  startDate: string,
  endDate: string,
  sortBy: string,
  genres: string[]
) => {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ru&page=${page}&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}&sort_by=${sortBy}&with_genres=${genres}`;

  return url;
};
