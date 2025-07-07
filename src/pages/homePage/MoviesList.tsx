import type { Movie } from "debflix-types";
import React from "react";
import { MovieCard } from "../../components/MovieCard";
import styles from "./MoviesList.module.css"

type Props = {
  movies: Movie[];
};

export const MoviesList = ({ movies }: Props) => {
  return movies.map((movie) => (
    <div >
      <MovieCard key={movie.id} movie={movie} />)
    </div>
  ));
};
