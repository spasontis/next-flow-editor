import { SetEdges, SetNodes, Node } from "@/shared/types";

export const getItems = (
  setNodes: SetNodes,
  setEdges: SetEdges,
  idRef?: React.RefObject<number>
) => {
  const flowData = localStorage.getItem("myFlowData");
  if (flowData) {
    const { nodes: savedNodes, edges: savedEdges } = JSON.parse(flowData);

    setNodes(savedNodes);
    setEdges(savedEdges);

    const maxId = savedNodes.reduce(
      (max: number, node: Node) => Math.max(max, Number(node.id)),
      0
    );
    if (idRef?.current !== undefined) {
      idRef.current = maxId + 1;
    }
  }
};
