import { createAction } from "@reduxjs/toolkit";

// user-actions
export const login = (token: string) => ({
  type: "LOGIN",
  payload: { token },
});
export const logout = () => ({
  type: "LOGOUT",
});

// list-actions
export const setIdFilm = (idFilm: number) => ({
  type: "SET_ID_FILM",
  payload: { idFilm },
});

export const setMovieList = (movieList: object) => ({
  type: "SET_MOVIE_LIST",
  payload: { movieList },
});

export const setMovieListSuccess = createAction(
  "SET_MOVIE_LIST_SUCCESS",
  (movieList: object) => ({
    payload: { movieList },
  })
);

export const setMovieListFailure = createAction(
  "SET_MOVIE_LIST_FAILURE",
  (error: unknown) => ({
    payload: { error },
  })
);
export const setFavorites = createAction(
  "SET_FAVORITES",
  (favorites: object) => ({
    payload: { favorites },
  })
);

export const setFavoritesSuccess = createAction(
  "SET_FAVORITES_SUCCESS",
  (data: object) => ({
    payload: { data },
  })
);

export const setFavoritesFailure = createAction(
  "SET_FAVORITES_FAILURE",
  (error) => ({
    payload: { error },
  })
);

export const setDetailsList = createAction(
  "SET_DETAILS_LIST",
  (detailsList: string) => ({
    payload: { detailsList },
  })
);

export const setDetailsListSuccess = createAction(
  "SET_DETAILS_LIST_SUCCESS",
  (data: object) => ({
    payload: { data },
  })
);

export const setDetailsListFailure = createAction(
  "SET_DETAILS_LIST_FAILURE",
  (error: unknown) => ({
    payload: { error },
  })
);

export const setArtistsListSuccess = createAction(
  "SET_ARTISTS_LIST_SUCCESS",
  (data: object) => ({
    payload: { data },
  })
);

export const setArtistsListFailure = createAction(
  "SET_ARTISTS_LIST_FAILURE",
  (error: unknown) => ({
    payload: { error },
  })
);

export const setIdUserSuccess = createAction(
  "SET_ID_USER_SUCCESS",
  (data: object) => ({
    payload: { data },
  })
);

export const setIdUserFailure = createAction(
  "SET_ID_USER_FAILURE",
  (error: unknown) => ({
    payload: { error },
  })
);

// filters-actions
export const updatePage = createAction(
  "UPDATE_PAGE",
  (currentPageNumber: number) => ({
    payload: { currentPageNumber },
  })
);

export const resetPage = createAction("RESET_PAGE");

export const setCategory = createAction("SET_CATEGORY", (category: string) => ({
  payload: { category },
}));

export const setSearchTerm = createAction(
  "SET_SEARCH_TERM",
  (searchTerm: string) => ({
    payload: { searchTerm },
  })
);

export const setReset = createAction("RESET");

export const setSelectedGenres = createAction(
  "SET_SELECTED_GENRES",
  (selectedGenres: object) => ({
    payload: { selectedGenres },
  })
);

export const setStartDate = createAction(
  "SET_START_DATE",
  (startDate: string) => ({
    payload: { startDate },
  })
);

export const setEndDate = createAction("SET_END_DATE", (endDate: string) => ({
  payload: { endDate },
}));
