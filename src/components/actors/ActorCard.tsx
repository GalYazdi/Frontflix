import type { Actor } from "debflix-types";
import { Transgender, Cake } from "lucide-react";
import styles from "./ActorCard.module.css";
import actorImage from "../../assets/tempProfilePhoto.jpg";

type Props = {
  actor: Actor;
};
export const ActorCard = ({ actor }: Props) => {
  const date = new Date(actor.birthDate).toLocaleDateString("he-IL", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const age =
    new Date().getFullYear() - new Date(actor.birthDate).getFullYear();
  return (
    <div className={styles.card}>
      <img src={actorImage} alt="actor" className={styles.actorImage} />
      <span className={styles.actorName}>{actor.name}</span>

      <div className={styles.genderWrapper}>
        <Transgender className={styles.icon} />
        <span className={styles.gender}> Female </span>
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
          {actor.movies?.map((movie, index) => (
            <div className={styles.movie} key={`${movie}-${index}`}>
              {movie.title}
              {actor.movies && index < actor.movies.length - 1 && (
                <span>•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
