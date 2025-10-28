import clsx from "clsx";
import styles from "./Utilities.module.css";

export const UtilitiesControls = ({
  onNodeInspector,
  onViewPortLogger,
  onSaveFlow,
  onRestoreFlow,
}: {
  onNodeInspector: () => void;
  onViewPortLogger: () => void;
  onSaveFlow: () => void;
  onRestoreFlow: () => void;
}) => (
  <>
    <button className={styles.button} onClick={onNodeInspector}>
      NodeInspector
    </button>
    <button className={styles.button} onClick={onViewPortLogger}>
      ViewPort
    </button>
    <span className={styles.line}></span>
    <button className={clsx(styles.button, styles.green)} onClick={onSaveFlow}>
      Save
    </button>
    <button className={clsx(styles.button, styles.red)} onClick={onRestoreFlow}>
      Restore
    </button>
  </>
);
