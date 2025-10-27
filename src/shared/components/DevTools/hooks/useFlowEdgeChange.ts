import { useCallback } from "react";

import { Edge, SetEdges } from "@/shared/types";

export const useFlowEdgeChange = (
  selectedEdge: Edge | undefined,
  setEdges: SetEdges
) => {
  const onChangeEdge = useCallback(() => {
    if (!selectedEdge) return;
    setEdges((eds) =>
      eds.map((edge) =>
        edge.id === selectedEdge.id
          ? { ...edge, animated: !edge.animated }
          : edge
      )
    );
  }, [selectedEdge, setEdges]);

  return onChangeEdge;
};
