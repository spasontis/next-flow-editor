"use client";

import { useEffect, useRef } from "react";
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  Panel,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { Edge, Node } from "@/shared/types";

import { getItems } from "../actions";
import { nodeOrigin, nodeTypes } from "../constants";

import styles from "./FlowPage.module.css";
import Link from "next/link";

export const FlowPage = () => {
  const proOptions = { hideAttribution: true };

  const reactFlowWrapper = useRef(null);

  const [nodes, setNodes] = useNodesState<Node>([]);
  const [edges, setEdges] = useEdgesState<Edge>([]);

  useEffect(() => getItems(setNodes, setEdges), [setNodes, setEdges]);

  return (
    <ReactFlowProvider>
      <div className={styles.roadmap} ref={reactFlowWrapper}>
        <ReactFlow
          colorMode="dark"
          nodes={nodes}
          nodeTypes={nodeTypes}
          nodesDraggable={false}
          edges={edges}
          proOptions={proOptions}
          fitView
          nodeOrigin={nodeOrigin}
        >
          <Panel position="top-right">
            <Link href="/workflow" className={styles.button}>
              WorkFlow
            </Link>
          </Panel>
          <Background />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};
