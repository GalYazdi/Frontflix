import { useQuery } from "@tanstack/react-query";
import type { Actor, Movie } from "debflix-types";

import { ActorForm } from "../../components/actors/ActorForm";
import { ActorsNavbar } from "../../components/actors/ActorsNavBar";
import { useAppSelector } from "../../app/hooks";
import { fetchActors } from "../../api/actors";
import { ActorsList } from "../../components/actors/ActorsList";
import { fetchMovies } from "../../api/fakeMovies";
import { QueryKeys } from "../../utils/queryKeys";
import { ActorButtons } from "../../components/actors/ActorButtons";

export const ActorsPage = () => {
  const modalState = useAppSelector((state) => state.modal.modalOpen);

  const {
    data: actors,
    isLoading,
    isError,
  } = useQuery<Actor[]>({
    queryKey: [QueryKeys.actors],
    queryFn: fetchActors,
  });

  const { data: movies } = useQuery<Movie[]>({
    queryKey: [QueryKeys.movies],
    queryFn: fetchMovies,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading actors</div>;

  return (
    <>
      <ActorsNavbar />
      <ActorButtons />
      <ActorsList actors={actors ?? []} />
      {modalState && <ActorForm movies={movies} />}
    </>
  );
};
