import type { Movie } from "debflix-types";
import { MovieCard } from "../../components/MovieCard";
import styles from "./MoviesList.module.css";
import categories from "../../api/mocks/categories.json";

type Props = {
  movies: Movie[];
};

console.log("c", categories);

export const MoviesList = ({ movies }: Props) => {
  return (
    <div>
      {categories.map((category) => {
        const filteredMovies = movies.filter((movie) =>
          movie.categories.includes(category.name)
        );
        if (filteredMovies.length === 0) return null;
        return (
          <div key={category.id}>
            <p className={styles.category}>{category.name}</p>
            <div className={styles.gridContainer}>
              {filteredMovies.map((movie) => (
                <div key={movie.id}>
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
