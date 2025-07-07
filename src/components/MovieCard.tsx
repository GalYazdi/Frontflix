import movieImg from "../assets/spiderman.jpg";
import styles from "./MovieCard.module.css";

import type { Movie } from "debflix-types";
import { MovieInfo } from "./MovieInfo";

type Props = {
  movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
  return (
    <>
      <p className={styles.category}>Category </p>
      <div className={styles.card}>
        <img
          src={movieImg}
          alt="Most liked movie"
          className={styles.movieImage}
        />
        <MovieInfo movie={movie} variant="card"/>
      </div>
    </>
  );
};
