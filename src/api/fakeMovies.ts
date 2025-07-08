import type { Movie } from "debflix-types";
import data from "./mocks/movies.json";

export const fetchMovies = async (): Promise<Movie[]> => {
  await new Promise((res) => setTimeout(res, 300));
  return data;
};
