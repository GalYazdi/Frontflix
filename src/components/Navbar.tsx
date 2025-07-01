import styles from "./Navbar.module.css";
import { FaSearch } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import defaultProfile from "../assets/temp.jpg";

export const Navbar = () => {
  const userProfileImage = defaultProfile; // later will be replaced with a dynamic image
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <text>DEBFLIX</text>
      </div>
      <div className={styles["navbar-categories"]}>
        <button>Home (50)</button>
        <button>Series (20)</button>
        <button>Films (10)</button>
        <button>New & Popular (39)</button>
        <button>My list (25)</button>
        <button>Favorite (25)</button>
      </div>
      <div className={styles["navbar-rightSection"]}>
        <button className={styles.profileBtn}>
          <FaSearch color="white" size={29} />
        </button>
        <button className={styles.profileBtn}>
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
