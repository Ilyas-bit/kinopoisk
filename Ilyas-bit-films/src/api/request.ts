// api.js

import Cookies from "js-cookie";
import * as apiConstants from "../constants/urls";

export const getMovieGenres = async (token: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(
      `${apiConstants.API_BASE_URL}${apiConstants.MOVIE_GENRE_ENDPOINT}?${apiConstants.LANGUAGE_PARAM}`,
      options
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchMovies = async (
  token: string,
  page: number,
  startDate: string,
  endDate: string,
  sortBy: string,
  genres: number[]
) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const url = apiConstants.getUrl(page, startDate, endDate, sortBy, genres);

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieListByType = async (
  requestType: string,
  number: number,
  token: string
) => {
  let url;
  const baseApiUrl = apiConstants.API_BASE_URL;

  switch (requestType) {
    case "top_rated":
      url = `${baseApiUrl}${apiConstants.MOVIE_LIST_ENDPOINT}top_rated?${apiConstants.LANGUAGE_PARAM}&page=${number}`;
      break;
    case "popular":
      url = `${baseApiUrl}${apiConstants.MOVIE_LIST_ENDPOINT}popular?${apiConstants.LANGUAGE_PARAM}&page=${number}`;
      break;
    case "details":
      url = `${baseApiUrl}${apiConstants.MOVIE_LIST_ENDPOINT}${number}?${apiConstants.LANGUAGE_PARAM}`;
      break;
    case "artists":
      url = `${baseApiUrl}${apiConstants.MOVIE_LIST_ENDPOINT}${number}${apiConstants.ARTISTS_ENDPOINT}?${apiConstants.LANGUAGE_PARAM}`;
      break;
    default:
      throw new Error("Invalid request type");
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getIdUser = async (token: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(
      `${apiConstants.API_BASE_URL}${apiConstants.ACCOUNT_ID_ENDPOINT}`,
      options
    );
    const json = await response.json();
    Cookies.set("IdUser", json.id);
    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getFavorites = async (token: string, idUser: number) => {
  const url = `https://api.themoviedb.org/3/account/${idUser}/favorite/movies`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const addFavorites = async (
  token: string,
  idUser: number,
  movie_id: number,
  isFavorite: boolean
) => {
  const url = `https://api.themoviedb.org/3/account/${idUser}/favorite`;

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      media_type: "movie",
      media_id: movie_id,
      favorite: !isFavorite,
    }),
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const movieSearch = async (
  token: string,
  title: string,
  page: number
) => {
  const url = `${apiConstants.API_BASE_URL}${apiConstants.MOVIE_SEARCH_ENDPOINT}?query=${title}&include_adult=false&${apiConstants.LANGUAGE_PARAM}&page=${page}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
