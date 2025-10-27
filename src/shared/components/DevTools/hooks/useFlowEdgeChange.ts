import { Edge } from "@xyflow/react";
import { useCallback } from "react";

type SetEdges = React.Dispatch<React.SetStateAction<Edge[]>>;

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
