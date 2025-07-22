import axios from "axios";
import type { Actor, Movie } from "debflix-types";

type NewActor = {
  name: string;
  birthDate: number;
  movies: Movie[];
};

export const fetchActors = async (): Promise<Actor[]> => {
  const res = await axios.get<Actor[]>("http://localhost:3000/actors/getAll");
  return res.data;
};

export const addActor = async (actor: NewActor): Promise<Actor> => {
  const res = await axios.post<Actor>(
    "http://localhost:3000/actors/add",
    actor,
    { headers: { "Content-Type": "application/json" } }
  );
  return res.data;
};
