import { Node, SetEdges, SetNodes } from "@/shared/types";

export const getItems = (
  setNodes: SetNodes,
  setEdges: SetEdges,
  idRef?: React.RefObject<number>
) => {
  const flowData = localStorage.getItem("myFlowData");
  if (flowData) {
    const { nodes: savedNodes, edges: edges } = JSON.parse(flowData);
    const nodes = savedNodes.map((node: Node) => ({
      ...node,
      data: { ...node.data, selected: false },
    }));

    setNodes(nodes);
    setEdges(edges);

    const maxId = savedNodes.reduce(
      (max: number, node: Node) => Math.max(max, Number(node.id)),
      0
    );
    if (idRef?.current !== undefined) {
      idRef.current = maxId + 1;
    }
  }
};
