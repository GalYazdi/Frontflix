import movieImg from "../assets/spiderman.jpg";
import styles from "./MovieCard.module.css";

export const MovieCard = () => {
  return (
    <>
      <p className={styles.category}>Category </p>

      <div className={styles.card}>
        <img
          src={movieImg}
          alt="Most liked movie"
          className={styles.movieImage}
        />
        <div style={{ position: "relative" }}>
          <span className={styles.movieName}>name of a movie</span>
          <span className={styles.movieRating}>2/10</span>
        </div>
      </div>
    </>
  );
};
