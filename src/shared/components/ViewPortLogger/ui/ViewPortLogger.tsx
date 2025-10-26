import { Panel, useStore } from "@xyflow/react";

import styles from "./ViewPortLogger.module.css";

export const ViewportLogger = () => {
  const viewport = useStore(
    (s) =>
      `x: ${s.transform[0].toFixed(2)}, y: ${s.transform[1].toFixed(
        2
      )}, zoom: ${s.transform[2].toFixed(2)}`
  );

  return (
    <Panel className={styles.viewport} position="bottom-left">
      {viewport}
    </Panel>
  );
};
