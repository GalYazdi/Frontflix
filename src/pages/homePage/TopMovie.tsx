import React from "react";
import topMovie from "../../assets/spiderman.jpg";
import styles from "./TopMovie.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import type { Movie } from "debflix-types";

type Props = {
  movie: Movie;
};

export const TopMovie = ({ movie }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.movieDetails}>
        <span className={styles.mostLiked}>Most liked movie</span>
        <div style={{ position: "relative" }}>
          <span className={styles.movieName}>{movie?.title}</span>
          <span className={styles.movieRating}>{movie?.rating}</span>
        </div>
        <div>
          <span className={styles.movieCategory}>
            {movie?.categories.map((category, index) => (
              <span key={category}>
                {" "}
                {category}{" "}
                {index < movie.categories.length - 1 && (
                  <span className={styles.dot}>•</span>
                )}
              </span>
            ))}
          </span>
          <p className={styles.movieCreator}>
            {movie?.year} By {movie?.director}
          </p>
          <div className={styles.movieLikes}>
            <AiOutlineHeart size="22" color="red" />
            <span className={styles.numOfLikes}>{movie?.likes}</span>
          </div>
        </div>
      </div>
      <img
        src={topMovie}
        alt="Most liked movie"
        className={styles.movieImage}
      />
    </div>
  );
};
