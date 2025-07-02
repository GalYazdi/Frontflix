import React from "react";
import topMovie from "../../assets/spiderman.jpg";
import styles from "./TopMovie.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../../types/Movie";
import { getMostLikedMovie } from "../../api/fakeMovies";

export const TopMovie = () => {
  const {
    data: movie,
    isLoading,
    error,
  } = useQuery<Movie>({
    queryKey: ["mostLikedMovie"],
    queryFn: getMostLikedMovie,
  });

  return isLoading ? (
    <div>טוען...</div>
  ) : error ? (
    <div>{error.message}</div>
  ) : (
    <div className={styles.container}>
      <div className={styles.movieDetails}>
        <span className={styles.mostLiked}>Most liked movie</span>
        <div style={{ position: "relative" }}>
          <span className={styles.movieName}>{movie?.name}</span>
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
          <p className={styles.movieCreator}>{movie?.year} By {movie?.director}</p>
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
