import { instanceAxios } from "../share/helper/createAxios";

export const getMovies = () =>
  instanceAxios({ method: "GET", params: { s: "movie", t: "a", limit: 25 } });

export const getMovieId = (id) =>
  instanceAxios({ method: "GET", params: { i: id } });

export const getSearchMovie = (searchTitle) =>
  instanceAxios({ method: "GET", params: { s: searchTitle } });
