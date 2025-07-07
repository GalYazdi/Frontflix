import React from "react";
import { Navbar } from "../../components/Navbar";
import { TopMovie } from "./TopMovie";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { Movie } from "../../types/Movie";
import { getMostLikedMovie } from "../../api/fakeMovies";
import { MovieCard } from "../../components/MovieCard";

export const Home = () => {
  const queryClient = useQueryClient();

  const {
    data: movies,
    isLoading,
    error,
  } = useQuery<Movie[]>({
    queryKey: ["movies"],
    queryFn: getMostLikedMovie,
  });
  console.log("cache", queryClient.getQueryCache()); // log cache

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
      <Navbar />
      <div style={{ height: "1px" }} />

      <TopMovie movie={topLikedMovie} />
      <MovieCard />
    </>
  );
};
