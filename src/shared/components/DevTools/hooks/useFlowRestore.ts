import { type Node, type Edge } from "@xyflow/react";
import { useCallback } from "react";

import { DEFAULT_NODES } from "../../Flow/constants";

type SetNodes = React.Dispatch<React.SetStateAction<Node[]>>;
type SetEdges = React.Dispatch<React.SetStateAction<Edge[]>>;

export const useFlowRestore = (setNodes: SetNodes, setEdges: SetEdges) => {
  const onRestore = useCallback(() => {
    const flowData = localStorage.getItem("myFlowData");
    if (flowData) {
      const { nodes: savedNodes, edges: savedEdges } = JSON.parse(flowData);
      if (savedNodes.length === 0) {
        setNodes(DEFAULT_NODES);
        return;
      }
      setNodes(savedNodes);
      setEdges(savedEdges);
    }
  }, [setNodes, setEdges]);
  return onRestore;
};
