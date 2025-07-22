import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Movie } from "debflix-types";

import { Navbar } from "../../components/Navbar";
import { TopMovie } from "./TopMovie";
import { fetchMovies } from "../../api/fakeMovies";
import { MoviesList } from "./MoviesList";
import { QueryKeys } from "../../utils/queryKeys";

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    isLoading,
    error,
  } = useQuery<Movie[]>({
    queryKey: [QueryKeys.movies],
    queryFn: fetchMovies,
  });

  const filteredMovies: Movie[] = useMemo(() => {
    if (searchQuery.trim() === "") {
      return movies ?? [];
    }

    return (
      movies?.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      ) ?? []
    );
  }, [searchQuery, movies]);

  const topLikedMovie: Movie | undefined = useMemo(() => {
    return movies?.reduce((max, movie) =>
      movie.likes > max.likes ? movie : max
    );
  }, [movies]);

  if (!movies) {
    return <div>{error?.message}</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {topLikedMovie && <TopMovie movie={topLikedMovie} />}
      <MoviesList movies={filteredMovies} />
    </>
  );
};
