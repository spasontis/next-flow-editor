import { Edge } from "@/shared/types";

import styles from "./DevTools.module.css";

export const EdgeControls = ({
  selectedEdge,
  onChangeEdge,
}: {
  selectedEdge?: Edge;
  onChangeEdge: () => void;
}) => {
  if (!selectedEdge) return null;

  return (
    <>
      <button className={styles.button} onClick={onChangeEdge}>
        Change edge style
      </button>
      <span className={styles.line}></span>
    </>
  );
};
