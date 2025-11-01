import { FlowProps } from "@/shared/types";
import { useCallback } from "react";

export const useFlowSave = ({ nodes, edges }: FlowProps) => {
  const onSave = useCallback(() => {
    const flowData = { nodes, edges };
    localStorage.setItem("myFlowData", JSON.stringify(flowData));
  }, [nodes, edges]);

  const onDownload = useCallback(() => {
    const flowData = JSON.stringify({ nodes, edges }, null, 2);
    const blob = new Blob([flowData], { type: "application/json" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "flowData.json";
    link.click();

    URL.revokeObjectURL(url);
  }, [nodes, edges]);

  return { onSave, onDownload };
};
