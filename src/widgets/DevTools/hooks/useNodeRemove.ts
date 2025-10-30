import { useCallback } from "react";

import { SetNodes, SetEdges, Node } from "@/shared/types";

export const useNodeRemove = (
  selectedNode: Node | undefined,

  setNodes: SetNodes,
  setEdges: SetEdges
) => {
  const onRemove = useCallback(() => {
    if (!selectedNode) return;

    setNodes((nds) => nds.filter((node) => node.id !== selectedNode.id));
    setEdges((eds) =>
      eds.filter(
        (edge) =>
          edge.source !== selectedNode.id && edge.target !== selectedNode.id
      )
    );
  }, [selectedNode, setNodes, setEdges]);

  return onRemove;
};
