import { Link } from "react-router-dom";
import type { Movie } from "debflix-types";
import axios from "axios";

import movieImg from "../assets/spiderman.jpg";
import styles from "./MovieCard.module.css";
import { MovieInfo } from "./MovieInfo";
import { API_BASE_URL } from "../utils/config";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../utils/queryKeys";

type Props = {
  movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
  const { id } = movie;

  const fetchMovie = async () => {
    const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
    return response.data;
  };

  const { error, refetch } = useQuery({
    queryKey: [QueryKeys.movieById, id],
    queryFn: fetchMovie,
  });
  const handleClick = async () => {
    const result = await refetch();
    console.log(result.data);
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className={styles.card}>
      <Link
        to={`/movie/${id}`}
        className={styles.cardButton}
        onClick={handleClick}
      >
        <img src={movieImg} alt="movie" className={styles.movieImage} />
        <MovieInfo movie={movie} variant="card" />
      </Link>
    </div>
  );
};
