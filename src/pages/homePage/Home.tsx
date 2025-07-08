import React from "react";
import { Navbar } from "../../components/Navbar";
import { TopMovie } from "./TopMovie";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { Movie } from "debflix-types";
import { fetchMovies } from "../../api/fakeMovies";
import { MoviesList } from "./MoviesList";
import { useState, useEffect } from "react";

export const Home = () => {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const {
    data: movies,
    isLoading,
    error,
  } = useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });
  console.log("cache", queryClient.getQueryCache()); // log cache

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults(movies ?? []);
      return;
    }

    const filteredMovies =
      movies?.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      ) ?? [];

    setSearchResults(filteredMovies);
  }, [searchQuery, movies]);

  if (!movies) {
    return <div>{error?.message}</div>;
  }

  const topLikedMovie = movies?.reduce((max, movie) =>
    movie.likes > max.likes ? movie : max
  );

  return isLoading ? (
    <div>טוען...</div>
  ) : error ? (
    <div>{error.message}</div>
  ) : (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div style={{ height: "1px" }} />

      <TopMovie movie={topLikedMovie} />
      <MoviesList movies={searchResults} />
    </>
  );
};
