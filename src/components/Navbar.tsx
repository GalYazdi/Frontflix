import styles from "./Navbar.module.css";
import { FaSearch } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import defaultProfile from "../assets/tempProfilePhoto.jpg";
import { useQuery } from "@tanstack/react-query";
import { getNavbarData } from "../api/fakeNavbarData";
import type { navbarData } from "../types/NavbarData";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
};

export const Navbar = ({ searchQuery, setSearchQuery }: Props) => {
  const { data: navData, isLoading, error } = useQuery({
    queryKey: ["navBarData"],
    queryFn: getNavbarData,
  });
  const [displaySearchField, setDisplaySearchField] = useState(false);

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
          <Link to="/" key={category.key} className={styles.navLink}>
            {category.label} ({navData?.[category.key]})
          </Link>
        ))}
      </div>
      <div className={styles["navbar-rightSection"]}>
        <div className={styles.searchContainer}>
          {displaySearchField ? (
            <div className={styles.searchWrapper}>
              <input
                className={styles.searchField}
                placeholder="Search a movie..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className={styles.searchBtnInside}
                onClick={() => setDisplaySearchField(false)}
                type="button"
              >
                <FaSearch color="black" />
              </button>
            </div>
          ) : (
            <button
              className={styles.searchBtn}
              onClick={() => setDisplaySearchField(true)}
              type="button"
            >
              <span className={styles.searchIcon}>
              <FaSearch color="white"  />
              </span>
            </button>
          )}
        </div>

        <button className={styles.actorsBtn}>
          <span className={styles.actorsIcon}>
            <FaUserFriends color="white" />
          </span>
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
