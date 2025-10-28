import { Node } from "@/shared/types";

interface CustomNodeData extends Record<string, unknown> {
  label: string;
  onChange?: (id: string, value: string) => void;
}

export type CustomNodeType = Node<CustomNodeData>;
