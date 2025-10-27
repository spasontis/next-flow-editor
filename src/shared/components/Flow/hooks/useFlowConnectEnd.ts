import {
  type Node,
  type Edge,
  XYPosition,
  FinalConnectionState,
} from "@xyflow/react";
import { useCallback, useRef } from "react";
import { getNewEdge, getNewNode } from "../actions";

type SetNodes = React.Dispatch<React.SetStateAction<Node[]>>;
type SetEdges = React.Dispatch<React.SetStateAction<Edge[]>>;

interface UseFlowConnectEndParams {
  setNodes: SetNodes;
  setEdges: SetEdges;
  screenToFlowPosition: (pos: XYPosition) => XYPosition;
  initialId?: number;
}

export const useFlowConnectEnd = ({
  setNodes,
  setEdges,
  screenToFlowPosition,
  initialId = 1,
}: UseFlowConnectEndParams) => {
  const idRef = useRef(initialId ?? 1);

  const getId = () => {
    const newId = idRef.current;
    idRef.current += 1;
    return `${newId}`;
  };

  const onConnectEnd = useCallback(
    (event: MouseEvent | TouchEvent, connectionState: FinalConnectionState) => {
      if (!connectionState.isValid) {
        const id = getId();
        const { clientX, clientY } =
          "changedTouches" in event ? event.changedTouches[0] : event;

        const newNode = getNewNode({
          id,
          position: screenToFlowPosition({ x: clientX, y: clientY }),
        });

        const newEdge = getNewEdge({
          id,
          sourceId: connectionState.fromNode?.id || "",
          targetId: id,
        });

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) => eds.concat(newEdge));
      }
    },
    [screenToFlowPosition, setNodes, setEdges]
  );
  return onConnectEnd;
};
