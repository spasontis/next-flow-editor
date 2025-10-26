import { NewNodeProps } from "../types";
import styles from "./NewNode.module.css";

export const NewNode = ({ id }: NewNodeProps) => {
  return (
    <div className={styles.node}>
      <input className={styles.input} type="text" placeholder={`Node ${id}`} />
    </div>
  );
};
