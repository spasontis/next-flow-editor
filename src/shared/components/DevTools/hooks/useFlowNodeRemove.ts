import { Edge, Node } from "@xyflow/react";
import { useCallback } from "react";

type SetSelectedNode = React.Dispatch<React.SetStateAction<Node | undefined>>;
type SetNodes = React.Dispatch<React.SetStateAction<Node[]>>;
type SetEdges = React.Dispatch<React.SetStateAction<Edge[]>>;

export const useFlowNodeRemove = (
  selectedNode: Node | undefined,
  setSelectedNode: SetSelectedNode,
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
    setSelectedNode(undefined);
  }, [selectedNode, setNodes, setEdges, setSelectedNode]);

  return onRemove;
};
