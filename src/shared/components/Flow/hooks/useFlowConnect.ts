import { addEdge, Connection, Edge } from "@xyflow/react";
import { useCallback } from "react";

type SetEdges = React.Dispatch<React.SetStateAction<Edge[]>>;

export const useFlowConnect = (setEdges: SetEdges) => {
  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return onConnect;
};
