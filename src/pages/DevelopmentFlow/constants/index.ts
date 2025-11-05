"use client";

import { DevelopmentEdge } from "@/shared/components/DevelopmentEdge";
import {
  DevelopmentNodeDefault,
  DevelopmentNodeVertical,
  DevelopmentNodeVerticalIn,
  DevelopmentNodeVerticalOut,
  DevelopmentNodeHorizontal,
  DevelopmentNodeHorizontalIn,
  DevelopmentNodeHorizontalOut,
} from "@/shared/components/DevelopmentNode";

export const nodeOrigin: [number, number] = [0.5, 0];

export const nodeTypes = {
  "default-node": DevelopmentNodeDefault,
  "v-in-out": DevelopmentNodeVertical,
  "v-in": DevelopmentNodeVerticalIn,
  "v-out": DevelopmentNodeVerticalOut,
  "h-in-out": DevelopmentNodeHorizontal,
  "h-in": DevelopmentNodeHorizontalIn,
  "h-out": DevelopmentNodeHorizontalOut,
};

export const edgeTypes = {
  default: DevelopmentEdge,
};
