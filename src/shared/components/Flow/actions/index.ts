import {
  Node,
  Edge,
  GetNewEdgeParams,
  getNewNodeParams,
  SetSelectedEdge,
  SetSelectedNode,
} from "@/shared/types";

export const getNewNode = ({ id, position }: getNewNodeParams): Node => {
  return {
    id,
    type: "default",
    position,
    data: {
      label: `${"Node: " + id}`,
    },
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
    animated: true,
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
