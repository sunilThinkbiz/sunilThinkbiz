// movieService.js

import axios from 'axios';

const api_key = "307297dd26eb70afc41ee11862fb9be0";
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({ baseURL: BASE_URL });

export const getUpcomingMovies = async () => {
  try {
    const response = await api.get("discover/movie", { params: { api_key } });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
export const postUpcomingMovies = async () => {
  try {
    const response = await api.post("discover/movie", { params: { api_key } });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
// export const createMovie = async (movieData) => {
//   try {
//     const response = await api.post("movie/upcoming", movieData, {
//       params: { api_key }
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;
