import { type Node, type Edge } from "@xyflow/react";

export {
  type Node,
  type Edge,
  type Connection,
  type XYPosition,
  type FinalConnectionState,
} from "@xyflow/react";

export interface FlowProps {
  nodes: Node[];
  edges: Edge[];
}

export type SetSelectedNode = React.Dispatch<
  React.SetStateAction<Node | undefined>
>;
export type SetSelectedEdge = React.Dispatch<
  React.SetStateAction<Edge | undefined>
>;

export type SetNodes = React.Dispatch<React.SetStateAction<Node[]>>;
export type SetEdges = React.Dispatch<React.SetStateAction<Edge[]>>;

export interface getNewNodeParams {
  id: string;
  position: { x: number; y: number };
}

export interface GetNewEdgeParams {
  id: string;
  sourceId: string;
  targetId?: string;
}
