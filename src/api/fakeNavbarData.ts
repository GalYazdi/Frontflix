import { faker } from "@faker-js/faker";
import type { navbarData } from "../types/NavbarData";

export const getNavbarData = async (): Promise<navbarData> => {
  await new Promise((res) => setTimeout(res, 300));
  return {
    home: faker.number.int({ min: 0, max: 100 }),
    series: faker.number.int({ min: 0, max: 100 }),
    films: faker.number.int({ min: 0, max: 100 }),
    new_popular: faker.number.int({ min: 0, max: 100 }),
    my_list: faker.number.int({ min: 0, max: 100 }),
    favorite: faker.number.int({ min: 0, max: 100 }),
  };
};
