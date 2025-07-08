import styles from "./Navbar.module.css";
import { FaSearch } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import defaultProfile from "../assets/tempProfilePhoto.jpg";
import { useQuery } from "@tanstack/react-query";
import { getNavbarData } from "../api/fakeNavbarData";
import type { navbarData } from "../types/NavbarData";

type Props = {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
};

export const Navbar = ({ searchQuery, setSearchQuery }: Props) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["navBarData"],
    queryFn: getNavbarData,
  });

  const userProfileImage = defaultProfile; // later will be replaced with a dynamic image

  return isLoading ? (
    <div>טוען...</div>
  ) : error ? (
    <div>{error.message}</div>
  ) : (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <span>DEBFLIX</span>
      </div>
      <div className={styles["navbar-categories"]}>
        {categories.map((category) => (
          <button key={category.key}>
            {category.label} ({data?.[category.key]})
          </button>
        ))}
      </div>
      <div className={styles["navbar-rightSection"]}>
        <div className={styles.searchContainer}>
          <input
            className={styles.searchField}
            placeholder="Search a movie..."
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button className={styles.searchBtn}>
            <FaSearch color="white" size={29} />
          </button>
        </div>
        <button className={styles.actorsBtn}>
          <FaUserFriends color="white" size={29} />
        </button>
        <button className={styles.profileBtn}>
          <img
            src={userProfileImage}
            alt="User Profile"
            className={styles.profileImage}
          />
        </button>
      </div>
    </div>
  );
};

const categories: { label: string; key: keyof navbarData }[] = [
  { label: "Home", key: "home" },
  { label: "Series", key: "series" },
  { label: "Films", key: "films" },
  { label: "New & Popular", key: "new_popular" },
  { label: "My list", key: "my_list" },
  { label: "Favorite", key: "favorite" },
];
