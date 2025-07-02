import React from "react";
import topMovie from "../../assets/spiderman.jpg";
import styles from "./TopMovie.module.css";
import { AiOutlineHeart } from "react-icons/ai";

export const TopMovie = () => {
  return (
    <div className={styles.container}>
      <div className={styles.movieDetails}>
        <span className={styles.mostLiked}>Most liked movie</span>
        <div style={{ position: "relative" }}>
          <span className={styles.movieName}>Name of a movie</span>
          <span className={styles.movieRating}>2/10</span>
        </div>
        <div>
          <span className={styles.movieCategory}>
            Category <span className={styles.dot}>•</span> Category{" "}
            <span className={styles.dot}>•</span> Category
          </span>
          <p className={styles.movieCreator}>Year By Creator </p>
          <div className={styles.movieLikes}>
            <AiOutlineHeart size="22" color="red" />
            <span className={styles.numOfLikes}>42</span>
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
