import { createReducer } from "@reduxjs/toolkit";
import {
  resetPage,
  setCategory,
  setEndDate,
  setSearchTerm,
  setSelectedGenres,
  setStartDate,
  updatePage,
} from "../actions/user-actions";

export interface state {
  currentPageNumber: number | null;
  category: string | null;
  searchTerm: object | null;
  selectedGenres: object | null;
  startDate: string | null;
  endDate: string | null;
}

export const initialState: state = {
  currentPageNumber: 1,
  category: "popularity.desc",
  searchTerm: null,
  selectedGenres: [],
  startDate: "1900-01-01",
  endDate: "2023-01-01",
};

export const filtersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("RESET", (state) => {
      state.currentPageNumber = 1;
      state.category = "popularity.desc";
      state.searchTerm = null;
      state.selectedGenres = [];
      state.startDate = "1900-01-01";
      state.endDate = "2023-01-01";
    })
    .addCase(updatePage, (state, action) => {
      state.currentPageNumber = action.payload.currentPageNumber;
    })
    .addCase(resetPage, (state) => {
      state.currentPageNumber = 1;
    })
    .addCase(setCategory, (state, action) => {
      state.category = action.payload.category;
    })
    .addCase(setSearchTerm, (state, action) => {
      state.searchTerm = action.payload.searchTerm;
    })
    .addCase(setSelectedGenres, (state, action) => {
      state.selectedGenres = action.payload.selectedGenres;
    })
    .addCase(setStartDate, (state, action) => {
      state.startDate = action.payload.startDate + "-01-01";
    })
    .addCase(setEndDate, (state, action) => {
      state.endDate = action.payload.endDate + "-01-01";
    });
});
