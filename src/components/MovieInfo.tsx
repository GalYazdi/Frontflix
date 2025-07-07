import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import type { Movie } from "debflix-types";
import styles from "./MovieInfo.module.css";

type Props = {
  movie: Movie;
  variant?: "card" | "top";
};

export const MovieInfo = ({ movie, variant }: Props) => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <span
          className={
            variant === "top" ? styles.topMovieName : styles.cardMovieName
          }
        >
          {movie?.title}
        </span>
        <span
          className={
            variant === "top" ? styles.topMovieRating : styles.cardMovieRating
          }
        >
          {movie?.rating}/10
        </span>
      </div>
      <div>
        <div
          className={
            variant === "top"
              ? styles.topMovieCategory
              : styles.cardMovieCategory
          }
        >
          {movie?.categories.map((category, index) => (
            <span key={`${category}-${index}`}>
              {" "}
              {category}{" "}
              {index < movie.categories.length - 1 && (
                <span
                  className={variant === "top" ? styles.topDot : styles.cardDot}
                >
                  •
                </span>
              )}
            </span>
          ))}
        </div>
        <p
          className={
            variant === "top" ? styles.topMovieCreator : styles.cardMovieCreator
          }
        >
          {movie?.year} By {movie?.director}
        </p>
        <div
          className={
            variant === "top" ? styles.topMovieLikes : styles.cardMovieLikes
          }
        >
          <AiOutlineHeart color="red" />
          <span
            className={
              variant === "top" ? styles.topNumOfLikes : styles.cardNumOfLikes
            }
          >
            {movie?.likes}
          </span>
        </div>
      </div>
    </>
  );
};
