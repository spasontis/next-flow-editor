"use client";

import { useEffect, useRef } from "react";
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";

import { Edge, Node } from "@/shared/types";

import "@xyflow/react/dist/style.css";

import styles from "./Flow.module.css";
import { getItems } from "../actions";
import { DefaultNode } from "@/shared/components/DefaultNode";

export const Flow = () => {
  const reactFlowWrapper = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const nodeTypes = {
    customNode: DefaultNode,
  };

  useEffect(() => getItems(setNodes, setEdges), [setNodes, setEdges]);

  const nodeOrigin: [number, number] = [0.5, 0];

  return (
    <div className={styles.roadmap} ref={reactFlowWrapper}>
      <ReactFlow
        colorMode="dark"
        nodes={nodes}
        nodeTypes={nodeTypes}
        nodesDraggable={false}
        edges={edges}
        fitView
        nodeOrigin={nodeOrigin}
      >
        <Background />
      </ReactFlow>
    </div>
  );
};
