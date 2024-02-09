import { createReducer } from "@reduxjs/toolkit";

interface UserState {
  token: string | null;
  idFilm: number | null;
}

const initialState: UserState = {
  token: null,
  idFilm: null,
};

interface LoginAction {
  type: "LOGIN";
  payload: {
    token: string;
  };
}

interface SetIdFilmAction {
  type: "SET_ID_FILM";
  payload: {
    idFilm: number;
  };
}

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LOGIN", (state, action: LoginAction) => {
      state.token = action.payload.token;
    })
    .addCase("LOGOUT", () => {
      return initialState;
    })
    .addCase("SET_ID_FILM", (state, action: SetIdFilmAction) => {
      state.idFilm = action.payload.idFilm;
    });
});
