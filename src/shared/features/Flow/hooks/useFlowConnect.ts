import { addEdge } from "@xyflow/react";

import { useCallback } from "react";

import { Connection, SetEdges } from "@/shared/types";

export const useFlowConnect = (setEdges: SetEdges) => {
  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return onConnect;
};
