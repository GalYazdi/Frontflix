import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import styles from "./BackButton.module.css";

export const BackButton = () => {
  return (
    <div className={styles.container}>
      <Link to={"/"} className={styles.addActorBtn}>
        <ArrowLeft />
      </Link>
    </div>
  );
};
