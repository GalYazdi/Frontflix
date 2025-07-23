import type { Movie } from "debflix-types";
import categories from "../../api/mocks/categories.json";
import { MovieCategory } from "../../components/movies/MovieCategory";
import styles from "./MovieList.module.css";

type Props = {
  movies: Movie[];
};

export const MoviesList = ({ movies }: Props) => (
  <div className={styles.container}>
    {categories.map((category) => {
      const filteredMovies = movies.filter((movie) =>
        movie.categories.includes(category.name)
      );

      return (
        <MovieCategory
          key={category.id}
          movies={filteredMovies}
          categoryID={category.id}
          categoryName={category.name}
        />
      );
    })}
  </div>
);
