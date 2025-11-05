import { useState } from "react";
import { Controls, Panel } from "@xyflow/react";

import { Toaster, useShowToast } from "@/shared/components/Toaster";
import { Node, Edge, SetEdges, SetNodes } from "@/shared/types";

import { useFlowRestore, useFlowSave } from "../hooks";

import { ViewportLogger } from "./ViewPortLogger";

import Link from "next/link";
import clsx from "clsx";

import styles from "./DevTools.module.css";

export const DevTools = ({
  nodes,
  edges,
  setNodes,
  setEdges,
}: {
  nodes: Node[];
  edges: Edge[];
  setNodes: SetNodes;
  setEdges: SetEdges;
}) => {
  const [viewportLogger, setViewportLogger] = useState(false);

  const { toastMessage, toastColor, withToast } = useShowToast();
  const { onSave, onDownload } = useFlowSave({ nodes, edges });
  const restoreFlow = useFlowRestore(setNodes, setEdges);

  const onSaveFlow = withToast(onSave, "Success saved", "green");
  const onRestoreFlow = withToast(restoreFlow, "Flow restored", "red");

  const onViewPortLogger = () => {
    setViewportLogger((prev) => !prev);
  };

  return (
    <>
      <Panel position="top-right" className={styles.panel}>
        <div className={styles.devtools}>
          <button className={styles.button} onClick={onViewPortLogger}>
            ViewPort
          </button>
          <span className={styles.line}></span>
          <button
            className={clsx(styles.button, styles.green)}
            onClick={onSaveFlow}
          >
            Save
          </button>
          <button
            className={clsx(styles.button, styles.green)}
            onClick={onDownload}
          >
            Dowload
          </button>
          <button
            className={clsx(styles.button, styles.red)}
            onClick={onRestoreFlow}
          >
            Restore
          </button>
        </div>
        <Link href="/flow" className={styles.button}>
          Flow
        </Link>
      </Panel>

      {viewportLogger && <ViewportLogger />}
      <Controls />
      <Toaster toastMessage={toastMessage} toastColor={toastColor} />
    </>
  );
};
