import axios from "axios";
import type { Actor } from "debflix-types";

type NewActor = Omit<Actor, "id" | "birthDate">

export const fetchActors = async (): Promise<Actor[]> => {
  const res = await axios.get<Actor[]>("http://localhost:3000/actors/getAll");
  return res.data;
};

export const addActor = async (actor: NewActor): Promise<Actor> => {
  const res = await axios.post<Actor>(
    "http://localhost:3000/actors/add",
    actor,
    // { headers: { "Content-Type": "application/json" } }
  );
  return res.data;
};
