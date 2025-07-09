import movieImg from "../assets/spiderman.jpg";
import styles from "./MovieCard.module.css";

import type { Movie } from "debflix-types";
import { MovieInfo } from "./MovieInfo";
import { Link } from "react-router-dom";

type Props = {
  movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
  const handleClick = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${movie.id}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Failed to fetch data: ", error);
    }
  };
  return (
    <>
      <div className={styles.card}>
        <Link to={`/movie/${movie.id}`} className={styles.cardButton} onClick={handleClick}>
          <img
            src={movieImg}
            alt="Most liked movie"
            className={styles.movieImage}
          />
          <MovieInfo movie={movie} variant="card" />
        </Link>
      </div>
    </>
  );
};
