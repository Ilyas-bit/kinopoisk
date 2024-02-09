import { Action } from "redux";

export interface ErrorState {}

interface FavoritesErrorAction extends Action {
  type: "FAVORITES_ERROR";
  payload: {
    error: string;
  };
}

export const initialState = {
  favoritesError: false,
  test: "",
};

export const errorReducer = (
  state = initialState,
  action: FavoritesErrorAction
): ErrorState => {
  switch (action.type) {
    case "FAVORITES_ERROR":
      return {
        ...state,
        favoritesError: action.payload.error,
      };

    default:
      return state;
  }
};
