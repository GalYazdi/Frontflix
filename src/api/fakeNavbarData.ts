import type { navbarData } from "../types/NavbarData";

export const getNavbarData = async (): Promise<navbarData> => {
  await new Promise((res) => setTimeout(res, 300));
  return {
    home: 42,
    series: 33,
    films: 50,
    new_popular: 55,
    my_list: 17,
    favorite: 10,
  };
};
