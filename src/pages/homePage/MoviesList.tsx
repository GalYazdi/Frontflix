import type { Movie } from "debflix-types";
import categories from "../../api/mocks/categories.json";
import { MovieCategory } from "./MovieCategory";

type Props = {
  movies: Movie[];
};

export const MoviesList = ({ movies }: Props) => (
  <div>
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
