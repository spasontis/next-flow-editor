import { type Edge, type Node } from "@xyflow/react";
import { useCallback } from "react";

interface UseFlowSaveProps {
  nodes: Node[];
  edges: Edge[];
}

export const useFlowSave = ({ nodes, edges }: UseFlowSaveProps) => {
  const onSave = useCallback(() => {
    const flowData = {
      nodes,
      edges,
    };
    localStorage.setItem("myFlowData", JSON.stringify(flowData));
  }, [nodes, edges]);

  return onSave;
};
