import { useState, useMemo } from "react";
import { Navbar } from "../../components/Navbar";
import { TopMovie } from "./TopMovie";
import { useQuery } from "@tanstack/react-query";
import type { Movie } from "debflix-types";
import { fetchMovies } from "../../api/fakeMovies";
import { MoviesList } from "./MoviesList";

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const {
    data: movies,
    isLoading,
    error,
  } = useQuery<Movie[]>({
    queryKey: ["movies"],
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

  return isLoading ? (
    <div>טוען...</div>
  ) : error ? (
    <div>{error.message}</div>
  ) : (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div style={{ height: "1px" }} />

      {topLikedMovie && <TopMovie movie={topLikedMovie} />}
      <MoviesList movies={filteredMovies} />
    </>
  );
};
