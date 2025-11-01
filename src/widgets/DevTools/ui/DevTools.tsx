import { useState } from "react";
import { Panel } from "@xyflow/react";

import { Toaster, useShowToast } from "@/shared/components/Toaster";
import { Node, Edge, SetEdges, SetNodes } from "@/shared/types";

import {
  useFlowRestore,
  useFlowSave,
  useEdgeChange,
  useNodeRemove,
} from "../hooks";

import { EdgeControls } from "./EdgeControls";
import { NodeControls } from "./NodeControls";
import { ViewportLogger } from "./ViewPortLogger";
import { NodeInspector } from "./NodeInspector";

import Link from "next/link";
import clsx from "clsx";

import styles from "./DevTools.module.css";

export const DevTools = ({
  nodes,
  edges,
  selectedNode,
  selectedEdge,
  setNodes,
  setEdges,
}: {
  nodes: Node[];
  edges: Edge[];
  selectedNode?: Node;
  selectedEdge?: Edge;
  setNodes: SetNodes;
  setEdges: SetEdges;
}) => {
  const [nodeInspector, setNodeInspector] = useState(false);
  const [viewportLogger, setViewportLogger] = useState(false);

  const { toastMessage, toastColor, withToast } = useShowToast();
  const { onSave, onDownload } = useFlowSave({ nodes, edges });
  const restoreFlow = useFlowRestore(setNodes, setEdges);
  const changeEdgeStyle = useEdgeChange(selectedEdge, setEdges);
  const removeNode = useNodeRemove(selectedNode, setNodes, setEdges);

  const onSaveFlow = withToast(onSave, "Success saved", "green");
  const onRestoreFlow = withToast(restoreFlow, "Flow restored", "red");
  const onRemoveNode = withToast(removeNode, "Node removed", "red");
  const onChangeEdge = withToast(changeEdgeStyle, "Edge changed", "default");

  const onNodeInspector = () => {
    setNodeInspector((prev) => !prev);
  };
  const onViewPortLogger = () => {
    setViewportLogger((prev) => !prev);
  };

  return (
    <>
      <Panel position="top-right" className={styles.panel}>
        <div className={styles.devtools}>
          <EdgeControls
            selectedEdge={selectedEdge}
            onChangeEdge={onChangeEdge}
          />
          <NodeControls
            selectedNode={selectedNode}
            onRemoveNode={onRemoveNode}
          />
          <button className={styles.button} onClick={onNodeInspector}>
            NodeInspector
          </button>
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
      {nodeInspector && <NodeInspector />}
      <Toaster toastMessage={toastMessage} toastColor={toastColor} />
    </>
  );
};
