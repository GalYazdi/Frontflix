import { AiOutlineHeart } from "react-icons/ai";
import type { Movie } from "debflix-types";
import styles from "./MovieInfo.module.css";

type Props = {
  movie: Movie;
  variant?: "card" | "top";
};

export const MovieInfo = ({
  movie: { title, rating, categories, year, director, likes },
  variant,
}: Props) => (
  <div>
    <div
      className={variant === "top" ? styles.topNameAndRating : styles.cardNameAndRating}
    >
      <span
        className={
          variant === "top" ? styles.topMovieName : styles.cardMovieName
        }
      >
        {title}
      </span>
      <span
        className={
          variant === "top" ? styles.topMovieRating : styles.cardMovieRating
        }
      >
        {rating}/10
      </span>
    </div>
    <div>
      <div
        className={
          variant === "top" ? styles.topMovieCategory : styles.cardMovieCategory
        }
      >
        <div className={styles.categoriesWrapper}>
          {categories.map((category, index) => (
            <div className={styles.movieCategory} key={`${category}-${index}`}>
              {" "}
              {category}{" "}
              {index < categories.length - 1 && (
                <span
                  className={variant === "top" ? styles.topDot : styles.cardDot}
                >
                  •
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <p
        className={
          variant === "top" ? styles.topMovieCreator : styles.cardMovieCreator
        }
      >
        {year} By {director}
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
          {likes}
        </span>
      </div>
    </div>
  </div>
);
