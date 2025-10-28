import { useCallback } from "react";

import { FlowProps } from "@/shared/types";

export const useFlowSave = ({ nodes, edges }: FlowProps) => {
  const onSave = useCallback(() => {
    const flowData = {
      nodes,
      edges,
    };
    localStorage.setItem("myFlowData", JSON.stringify(flowData));
  }, [nodes, edges]);

  return onSave;
};
