import { useCallback } from "react";

import { SetEdges, SetNodes } from "@/shared/types";
import { INITIAL_NODES } from "../constants";

export const useFlowRestore = (setNodes: SetNodes, setEdges: SetEdges) => {
  const onRestore = useCallback(() => {
    let flowData: string | null = null;

    flowData = localStorage.getItem("myFlowData");

    if (flowData !== null) {
      const { nodes: savedNodes, edges: savedEdges } = JSON.parse(flowData);
      if (savedNodes.length === 0) {
        setNodes(INITIAL_NODES);
        return;
      }
      setNodes(savedNodes);
      setEdges(savedEdges);
    } else {
      localStorage.setItem(
        "myFlowData",
        JSON.stringify({ nodes: INITIAL_NODES, edges: [] })
      );
    }
  }, [setNodes, setEdges]);

  return onRestore;
};
