import {
  NodeDefault,
  NodeVertical,
  NodeVerticalIn,
  NodeVerticalOut,
  NodeHorizontal,
  NodeHorizontalIn,
  NodeHorizontalOut,
} from "@/shared/components/Node";

export const nodeOrigin: [number, number] = [0.5, 0];

export const nodeTypes = {
  default: NodeDefault,
  "v-in-out": NodeVertical,
  "v-in": NodeVerticalIn,
  "v-out": NodeVerticalOut,
  "h-in-out": NodeHorizontal,
  "h-in": NodeHorizontalIn,
  "h-out": NodeHorizontalOut,
};

export const edgeTypes = {
  default: NodeDefault,
};
