import { Node } from "@/shared/types";

import styles from "./DevTools.module.css";

export const NodeControls = ({
  selectedNode,
  onRemoveNode,
}: {
  selectedNode?: Node;
  onRemoveNode: () => void;
}) => {
  if (!selectedNode) return null;

  return (
    <>
      <button className={styles.button} onClick={onRemoveNode}>
        Delete
      </button>
      <span className={styles.line}></span>
    </>
  );
};
