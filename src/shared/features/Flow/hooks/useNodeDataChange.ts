import { SetNodes } from "@/shared/types";
import { useCallback } from "react";

export const useNodeDataChange = (
  setNodes: SetNodes,
  selectedNodeId?: string
) => {
  return useCallback(
    (id: string, value: string) => {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === id
            ? {
                ...node,
                data: {
                  ...node.data,
                  label: value,
                  selected: selectedNodeId === node.id,
                },
              }
            : node
        )
      );
    },
    [setNodes, selectedNodeId]
  );
};
