"use client";

import { DevelopmentEdge } from "@/shared/components/DevelopmentEdge";
import {
  VerticalNode,
  HorizontalNode,
} from "@/shared/components/DevelopmentNode";

export const nodeOrigin: [number, number] = [0.5, 0];

export const nodeTypes = {
  v_in_out: VerticalNode,
  h_in_out: HorizontalNode,
};

export const edgeTypes = {
  "custom-edge": DevelopmentEdge,
};
