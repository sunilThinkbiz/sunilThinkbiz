// movieService.js

import axios from 'axios';

const api_key = "435c8880fa41fdbe5fba133c47f78d2b";
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({ baseURL: BASE_URL });

export const getUpcomingMovies = async () => {
  try {
    const response = await api.get("movie/upcoming", { params: { api_key } });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;
