import { ActorForm } from "../../components/actors/ActorForm";
import { ActorsNavbar } from "../../components/actors/ActorsNavBar";
import { AddActorButton } from "../../components/actors/AddActorButton";
import { BackButton } from "../../components/actors/BackButton";
import { useAppSelector } from "../../app/hooks";
import { useQuery } from "@tanstack/react-query";
import { fetchActors } from "../../api/actors";
import { ActorsList } from "../../components/actors/ActorsList";
import type { Actor, Movie } from "debflix-types";
import { fetchMovies } from "../../api/fakeMovies";
import { QueryKeys } from "../../utils/queryKeys";
import { useEffect } from "react";

export const ActorsPage = () => {
  const modalState = useAppSelector((state) => state.modal.modalOpen);

  const {
    data: actors,
    isLoading,
    isError,
  } = useQuery<Actor[]>({
    queryKey: ["actors"],
    queryFn: fetchActors,
  });

  const { data: movies } = useQuery<Movie[]>({
    queryKey: [QueryKeys.movies],
    queryFn: fetchMovies,
  });

  useEffect(() => {
    console.log("Movies data:", movies);
  }, [movies]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading actors</div>;

  return (
    <>
      <ActorsNavbar />
      <AddActorButton />
      <BackButton />

      <ActorsList actors={actors ?? []} />
      {modalState && <ActorForm movies={movies} />}
    </>
  );
};
