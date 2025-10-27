import { useCallback } from "react";

import { SetEdges, SetNodes } from "@/shared/types";
import { DEFAULT_NODES } from "../constants";

export const useFlowRestore = (setNodes: SetNodes, setEdges: SetEdges) => {
  const onRestore = useCallback(() => {
    let flowData: string | null = null;

    flowData = localStorage.getItem("myFlowData");

    if (flowData !== null) {
      const { nodes: savedNodes, edges: savedEdges } = JSON.parse(flowData);
      if (savedNodes.length === 0) {
        setNodes(DEFAULT_NODES);
        return;
      }
      setNodes(savedNodes);
      setEdges(savedEdges);
    } else {
      localStorage.setItem(
        "myFlowData",
        JSON.stringify({ nodes: DEFAULT_NODES, edges: [] })
      );
    }
  }, [setNodes, setEdges]);

  return onRestore;
};
