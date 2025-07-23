import type { Actor } from "debflix-types";
import { Transgender, Cake } from "lucide-react";

import styles from "./ActorCard.module.css";
import actorImage from "../../assets/tempProfilePhoto.jpg";

type Props = {
  actor: Actor;
};

export const ActorCard = ({
  actor: { firstName, lastName, birthDate, gender, movies },
}: Props) => {
  const date = new Date(birthDate).toLocaleDateString("he-IL", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const age = new Date().getFullYear() - new Date(birthDate).getFullYear();
  return (
    <div className={styles.card}>
      <img src={actorImage} alt="actor" className={styles.actorImage} />
      <span className={styles.actorName}>
        {firstName} {lastName}
      </span>

      <div className={styles.genderWrapper}>
        <Transgender className={styles.icon} />
        <span className={styles.gender}> {gender} </span>
      </div>
      <div className={styles.ageWrapper}>
        <Cake className={styles.icon} />
        <span className={styles.age}>
          {date} ({age})
        </span>
      </div>

      <div className={styles.moviesContainer}>
        <span className={styles.moviesSection}>Movies:</span>
        <div className={styles.moviesWrapper}>
          {movies?.map((movie, index) => (
            <div className={styles.movie} key={`${movie}-${index}`}>
              {movie.title}
              {movies && index < movies.length - 1 && (
                <span className={styles.dot}>•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
