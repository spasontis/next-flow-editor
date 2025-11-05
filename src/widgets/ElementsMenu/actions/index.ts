import { Node, SetNodes } from "@/shared/types";

export const onAdd = ({
  nodes,
  type,
  setNodes,
}: {
  nodes: Node[];
  type: string;
  setNodes: SetNodes;
}) => {
  const newNode: Node = {
    id: (nodes.length + 1).toString(),
    position: { x: 100, y: 100 },
    type,
    data: { label: "" },
  };
  setNodes((nds) => nds.concat(newNode));
};
