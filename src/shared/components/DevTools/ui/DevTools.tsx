import { useState } from "react";

import { type Node, type Edge, Panel } from "@xyflow/react";

import { useEdgeChange, useFlowRestore, useFlowSave } from "../hooks";

import { ViewportLogger } from "@/shared/components/ViewPortLogger";
import { NodeInspector } from "@/shared/components/NodeIncpector";

import { Toast, useShowToast } from "@/shared/components/Toast";
import { useNodeRemove } from "@/shared/components/CustomNode";

import clsx from "clsx";

import styles from "./DevTools.module.css";

type SetSelectedNode = React.Dispatch<React.SetStateAction<Node | undefined>>;
type SetNodes = React.Dispatch<React.SetStateAction<Node[]>>;
type SetEdges = React.Dispatch<React.SetStateAction<Edge[]>>;

export const DevTools = ({
  nodes,
  edges,
  selectedNode,
  selectedEdge,
  setSelectedNode,
  setNodes,
  setEdges,
}: {
  nodes: Node[];
  edges: Edge[];
  selectedNode?: Node;
  selectedEdge?: Edge;
  setSelectedNode: SetSelectedNode;
  setNodes: SetNodes;
  setEdges: SetEdges;
}) => {
  const [nodeInspector, setNodeInspector] = useState(false);
  const [viewportLogger, setViewportLogger] = useState(false);

  const { toastMessage, toastColor, showToast } = useShowToast();

  const saveFlow = useFlowSave({ nodes, edges });
  const restoreFlow = useFlowRestore(setNodes, setEdges);

  const changeEdgeStyle = useEdgeChange(selectedEdge, setEdges);

  const removeNode = useNodeRemove(
    selectedNode,
    setSelectedNode,
    setNodes,
    setEdges
  );

  const onNodeInspector = () => {
    setNodeInspector((prev) => !prev);
  };

  const onViewPortLogger = () => {
    setViewportLogger((prev) => !prev);
  };

  const onSaveFlow = () => {
    saveFlow();
    showToast("Success saved", "green");
  };

  const onRemoveNode = () => {
    removeNode();
    showToast("Node removed", "red");
  };

  const onChangeEdge = () => {
    changeEdgeStyle();
    showToast("Edge changed", "default");
  };

  const onRestoreFlow = () => {
    restoreFlow();
    showToast("Flow restored", "red");
  };

  return (
    <>
      <Panel position="top-right" className={styles.panel}>
        {selectedEdge && (
          <>
            <button
              className={clsx(styles.button, styles.default)}
              onClick={onChangeEdge}
            >
              Change edge style
            </button>
            <span className={styles.line}></span>
          </>
        )}
        {selectedNode && (
          <>
            <button
              className={clsx(styles.button, styles.default)}
              onClick={onRemoveNode}
            >
              Delete
            </button>
            <span className={styles.line}></span>
          </>
        )}

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
          className={clsx(styles.button, styles.red)}
          onClick={onRestoreFlow}
        >
          Restore
        </button>
      </Panel>
      {nodeInspector && <NodeInspector />}
      {viewportLogger && <ViewportLogger />}
      <Toast toastMessage={toastMessage} toastColor={toastColor} />
    </>
  );
};
