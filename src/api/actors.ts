import axios from "axios";
import type { Actor } from "debflix-types";
import { ACTORS_URL } from "../utils/config";

type NewActor = Omit<Actor, "id" | "birthDate">;

export const fetchActors = async (): Promise<Actor[]> => {
  const res = await axios.get<Actor[]>(`${ACTORS_URL}/getAll`);
  return res.data;
};

export const addActor = async (actor: NewActor): Promise<Actor> => {
  const res = await axios.post<Actor>(
    `${ACTORS_URL}/add`,
    actor
  );
  return res.data;
};
