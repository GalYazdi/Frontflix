import type React from "react";

import styles from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

export const Modal = ({ children }: Props) => (
  <div className={styles.modal}>{children}</div>
);
