"use client";

import { DevelopmentEdge } from "@/shared/components/DevelopmentEdge";
import {
  DevelopmentNode,
  VerticalNode,
  VerticalNodeIn,
  VerticalNodeOut,
  HorizontalNode,
  HorizontalNodeIn,
  HorizontalNodeOut,
} from "@/shared/components/DevelopmentNode";

export const nodeOrigin: [number, number] = [0.5, 0];

export const nodeTypes = {
  base: DevelopmentNode,
  "v-in-out": VerticalNode,
  "v-in": VerticalNodeIn,
  "v-out": VerticalNodeOut,
  "h-in-out": HorizontalNode,
  "h-in": HorizontalNodeIn,
  "h-out": HorizontalNodeOut,
};

export const edgeTypes = {
  "custom-edge": DevelopmentEdge,
};
