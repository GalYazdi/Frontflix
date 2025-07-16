import { Search, Users } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import defaultProfile from "../assets/tempProfilePhoto.jpg";
import { getNavbarData } from "../api/fakeNavbarData";
import type { navbarData } from "../types/NavbarData";
import { QueryKeys } from "../utils/queryKeys";

type Props = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const Navbar = ({ searchQuery, setSearchQuery }: Props) => {
  const {
    data: navData,
    isLoading,
    error,
  } = useQuery({
    queryKey: [QueryKeys.navbarData],
    queryFn: getNavbarData,
  });
  const [displaySearchField, setDisplaySearchField] = useState(false);
  const [userProfileImage, setUserProfileImage] = useState(defaultProfile);


  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
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
                <Search color="grey" />
              </button>
            </div>
          ) : (
            <button
              className={styles.searchBtn}
              onClick={() => setDisplaySearchField(true)}
              type="button"
            >
              <span className={styles.searchIcon}>
                <Search color="white" />
              </span>
            </button>
          )}
        </div>

        <button className={styles.actorsBtn}>
          <span className={styles.actorsIcon}>
            <Users color="white" />
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
