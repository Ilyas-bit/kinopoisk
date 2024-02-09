// В файле interfaces.ts

export interface FiltersInterface {
  key: number;
  counter: number;
  token: string | null;
  category: string;
  page: number;
  idFilm: string;
  movieList: MovieList;
  details: details;
  artists: Artists;
  errorToken: boolean;
  idUser: string;
  favorites: string;
  searchFils: string;
  typeRequest: string;
  pageSearch: number;
  requestFavorites: boolean;
  searchTerm: string;
}

export interface ResetAction {
  type: "reset";
}

export interface CounterAction {
  type: "COUNTER";
}

export interface SetCategoryAction {
  type: "SET_CATEGORY";
  payload: string;
}

export interface SetPageAction {
  type: "SET_PAGE";
  payload: number;
}

export interface SetIdFilmAction {
  type: "SET_ID_FILM";
  payload: number;
}

export interface SetDetailsFilmAction {
  type: "SET_DETAILS_FILM";
  payload: string;
}

export interface SetArtistsFilmAction {
  type: "SET_ARTISTS_FILM";
  payload: string;
}

export interface SetMovieListAction {
  type: "SET_MOVIE_LIST";
  payload: string;
}

export interface DelMovieArtistsListAction {
  type: "DEL_MOVIE_ARTISTS_LIST";
}

export interface SetTokenAction {
  type: "SET_TOKEN";
  payload: string | null;
}

export interface SetErrorTokenAction {
  type: "SET_ERROR_TOKEN";
  payload: boolean;
}

export interface SetIdUserAction {
  type: "SET_ID_USER";
  payload: string;
}

export interface SetFavoritesAction {
  type: "SET_FAVORITES";
  payload: string;
}

export interface SetSearchFilmsAction {
  type: "SET_SEARCH_FILMS";
  payload: string;
}

export interface SetTypeRequestAction {
  type: "SET_TYPE_REQUEST";
  payload: string;
}

export interface SetPageSearchAction {
  type: "SET_PAGE_SEARCH";
  payload: number;
}

export interface SetRequestForFavoritesAction {
  type: "SET_REQUEST_FOR_FAVORITES";
  payload: boolean;
}

export interface SetSearchTermAction {
  type: "SET_SEARCH_TERM";
  payload: string;
}

////////////

export type MoviesActionInterface =
  | ResetAction
  | CounterAction
  | SetCategoryAction
  | SetPageAction
  | SetIdFilmAction
  | SetDetailsFilmAction
  | SetArtistsFilmAction
  | SetMovieListAction
  | DelMovieArtistsListAction
  | SetTokenAction
  | SetErrorTokenAction
  | SetIdUserAction
  | SetFavoritesAction
  | SetSearchFilmsAction
  | SetTypeRequestAction
  | SetPageSearchAction
  | SetRequestForFavoritesAction
  | SetSearchTermAction;

export interface details {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
/////////
export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
//////////////////
export interface Artists {
  id: number;
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: string;
  job?: string;
}
///////////
export interface MovieList {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export enum OriginalLanguage {
  En = "en",
  Ja = "ja",
}
////////////////
