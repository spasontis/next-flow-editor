import { useCallback } from "react";

import { SetEdges, SetNodes } from "@/shared/types";
import { DEFAULT_NODES } from "../constants";

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
