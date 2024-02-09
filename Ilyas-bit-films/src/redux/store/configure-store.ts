import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "../reducers/user-reducer";
import { errorReducer } from "../reducers/error-reducer";
import { filtersReducer } from "../reducers/filters-reducer";
import { listReducer } from "../reducers/list-reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    filters: filtersReducer,
    list: listReducer,
    error: errorReducer,
  },
});
