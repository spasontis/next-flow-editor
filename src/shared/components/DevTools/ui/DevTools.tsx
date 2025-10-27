import { type Node, type Edge, Panel } from "@xyflow/react";
import clsx from "clsx";

import {
  useFlowEdgeChange,
  useFlowNodeRemove,
  useFlowRestore,
  useFlowSave,
  useShowToast,
} from "../hooks";

import { NodeInspector } from "@/shared/components/NodeIncpector";
import { ViewportLogger } from "@/shared/components/ViewPortLogger";

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
      {toastMessage && (
        <div className={clsx(styles.toast, styles[toastColor])}>
          {toastMessage}
        </div>
      )}
      <NodeInspector />
      <ViewportLogger />
    </>
  );
};
