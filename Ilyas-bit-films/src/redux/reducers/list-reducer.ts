import { createReducer } from "@reduxjs/toolkit";

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

export interface UserState {
  movieList: object | null;
  idUser: { data: object | null; error: unknown };
  favorites: { data: object | null; error: unknown };
  detailsList: { data: object | null; error: unknown };
  artistsList: { data: object | null; error: unknown };
}

export const initialState: UserState = {
  movieList: null,
  idUser: { data: null, error: null },
  favorites: { data: null, error: null },
  detailsList: { data: null, error: null },
  artistsList: { data: null, error: null },
};

export const listReducer = createReducer(initialState, (builder) => {
  builder

    .addCase(setMovieListSuccess, (state, action) => {
      state.movieList = {
        data: action.payload.movieList,
        error: null,
      };
    })
    .addCase(setMovieListFailure, (state, action) => {
      state.movieList = {
        data: null,
        error: action.payload.error,
      };
    })
    .addCase(setIdUserSuccess, (state, action) => {
      state.idUser = {
        data: action.payload.data,
        error: null,
      };
    })
    .addCase(setIdUserFailure, (state, action) => {
      state.idUser = {
        data: null,
        error: action.payload.error,
      };
    })
    .addCase(setFavoritesSuccess, (state, action) => {
      state.favorites = {
        data: action.payload.data,
        error: null,
      };
    })
    .addCase(setFavoritesFailure, (state, action) => {
      state.favorites = {
        data: null,
        error: action.payload.error,
      };
    })

    .addCase(setDetailsListSuccess, (state, action) => {
      state.detailsList = {
        data: action.payload.data,
        error: null,
      };
    })
    .addCase(setDetailsListFailure, (state, action) => {
      state.detailsList = {
        data: null,
        error: action.payload.error,
      };
    })
    .addCase(setArtistsListSuccess, (state, action) => {
      state.artistsList = {
        data: action.payload.data,
        error: null,
      };
    })
    .addCase(setArtistsListFailure, (state, action) => {
      state.artistsList = {
        data: null,
        error: action.payload.error,
      };
    });
});
