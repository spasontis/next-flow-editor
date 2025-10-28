import { type Node, type Edge, Panel } from "@xyflow/react";
import clsx from "clsx";

import {
  useFlowEdgeChange,
  useFlowNodeRemove,
  useFlowRestore,
  useFlowSave,
} from "../hooks";

import { Toast, useShowToast } from "@/shared/components/Toast";

import styles from "./DevTools.module.css";
import { NodeInspector } from "../../NodeIncpector";
import { ViewportLogger } from "../../ViewPortLogger";
import { useState } from "react";

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

  const changeEdgeStyle = useFlowEdgeChange(selectedEdge, setEdges);
  const removeNode = useFlowNodeRemove(
    selectedNode,
    setSelectedNode,
    setNodes,
    setEdges
  );

  const onSetNodeInspector = () => {
    setNodeInspector((prev) => !prev);
  };

  const onSetViewPortLogger = () => {
    setViewportLogger((prev) => !prev);
  };

  const onSave = () => {
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

  const onRestore = () => {
    restoreFlow();
    showToast("Flow restored", "red");
  };

  return (
    <>
      <Panel position="top-right" className={styles.panel}>
        <button className={styles.button} onClick={onSetNodeInspector}>
          NodeInspector
        </button>
        <button className={styles.button} onClick={onSetViewPortLogger}>
          ViewPort
        </button>
        {selectedNode && (
          <button className={styles.button} onClick={onRemoveNode}>
            Delete
          </button>
        )}
        {selectedEdge && (
          <button
            className={clsx(styles.button, styles.edit)}
            onClick={onChangeEdge}
          >
            Change
          </button>
        )}
        <button className={clsx(styles.button, styles.green)} onClick={onSave}>
          Save
        </button>
        <button className={clsx(styles.button, styles.red)} onClick={onRestore}>
          Restore
        </button>
      </Panel>
      {nodeInspector && <NodeInspector />}
      {viewportLogger && <ViewportLogger />}
      <Toast toastMessage={toastMessage} toastColor={toastColor} />
    </>
  );
};
