// import type { Movie } from "../types/Movie";
import { faker } from "@faker-js/faker";
import type { Movie } from "debflix-types";

export const getMostLikedMovie = async (): Promise<Movie[]> => {
  await new Promise((res) => setTimeout(res, 300));
  return Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(3),
    rating: parseFloat(faker.number.float({ min: 5, max: 10 }).toFixed(1)),
    categories: [faker.music.genre(), faker.music.genre(), faker.music.genre()],
    year: faker.date.past({ years: 25 }).getFullYear(),
    director: faker.person.fullName(),
    likes: faker.number.int({ min: 1, max: 1000 }),
  }));
};
