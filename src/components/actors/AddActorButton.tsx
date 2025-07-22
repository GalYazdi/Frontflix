import { useAppDispatch } from "../../app/hooks";
import styles from "./AddActorButton.module.css";
import { Plus } from "lucide-react";
import { openModal } from "../modal/modalSlice";

export const AddActorButton = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.container}>
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
