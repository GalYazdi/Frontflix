import type { Movie } from "debflix-types";
import { MovieCard } from "./MovieCard";
import styles from "./MovieCategory.module.css";

type Props = {
  movies: Movie[];
  categoryID: string;
  categoryName: string;
};

export const MovieCategory = ({ movies, categoryID, categoryName }: Props) => {
  return movies.length === 0 ? undefined : (
    <div key={categoryID}>
      <p className={styles.category}>
        {categoryName} ({movies.length})
      </p>
      <div className={styles.gridContainer}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
