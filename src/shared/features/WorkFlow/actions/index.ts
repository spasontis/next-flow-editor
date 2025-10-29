import {
  Node,
  Edge,
  SetEdges,
  SetNodes,
  GetNewEdgeParams,
  getNewNodeParams,
  SetSelectedEdge,
  SetSelectedNode,
} from "@/shared/types";

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

export const getNewNode = ({ id, position }: getNewNodeParams): Node => {
  return {
    id,
    type: "customNode",
    position,
    data: { label: "" },
    style: { width: "auto", height: "auto", cursor: "pointer" },
    origin: [0.5, 0.0],
  };
};

export const getNewEdge = ({
  id,
  sourceId,
  targetId,
}: GetNewEdgeParams): Edge => {
  return {
    id: `${id}-edge`,
    source: sourceId,
    target: targetId || id,
    animated: false,
    style: { stroke: "#772DF6" },
  };
};

export const resetSelected = (
  setSelectedNode: SetSelectedNode,
  setSelectedEdge: SetSelectedEdge
) => {
  const onResetSelected = ({ edge, node }: { edge?: Edge; node?: Node }) => {
    if (node) {
      setSelectedNode(node);
      setSelectedEdge(undefined);
    } else if (edge) {
      setSelectedEdge(edge);
      setSelectedNode(undefined);
    } else {
      setSelectedNode(undefined);
      setSelectedEdge(undefined);
    }
  };
  return onResetSelected;
};
