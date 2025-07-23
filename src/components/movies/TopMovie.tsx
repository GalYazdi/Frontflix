import type { Movie } from "debflix-types";

import topMovie from "../../assets/spiderman.jpg";
import styles from "./TopMovie.module.css";
import { MovieInfo } from "./MovieInfo";

type Props = {
  movie: Movie;
};

export const TopMovie = ({ movie }: Props) => (
  <div className={styles.container}>
    <div className={styles.movieDetails}>
      <span className={styles.mostLiked}>Most liked movie</span>
      <MovieInfo movie={movie} variant="top" />
    </div>
    <img src={topMovie} alt="Most liked movie" className={styles.movieImage} />
  </div>
);
