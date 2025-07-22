import type { Actor } from "debflix-types";
import { ActorCard } from "./ActorCard";
import styles from "./ActorsList.module.css";

type Props = {
  actors: Actor[];
};

export const ActorsList = ({ actors }: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Actors</h2>
      <div className={styles.gridContainer}>
      {actors.map((actor) => (
        <ActorCard key={actor.id} actor={actor} />
      ))}
      </div>
    </div>
  );
};
