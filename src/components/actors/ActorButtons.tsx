import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Plus } from "lucide-react";

import { useAppDispatch } from "../../app/hooks";
import { openModal } from "../modal/modalSlice";
import styles from "./ActorButtons.module.css";

export const ActorButtons = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <Link to={"/"} className={styles.backBtn}>
        <ArrowLeft />
      </Link>
      <button
        className={styles.addActorBtn}
        onClick={() => dispatch(openModal())}
      >
        <Plus />
        Add New Actor
      </button>
    </div>
  );
};
