import type { Movie } from "debflix-types";
import React from "react";
import { MovieCard } from "../../components/MovieCard";

type Props = {
  movies: Movie[];
};

export const MoviesList = ({ movies }: Props) => {
  return movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);
};
