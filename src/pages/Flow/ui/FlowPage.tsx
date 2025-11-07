"use client";

import { useEffect, useRef } from "react";
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  Panel,
  ReactFlowProvider,
  Controls,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { Edge, Node } from "@/shared/types";

import { getItems } from "../actions";
import { nodeOrigin, nodeTypes } from "../constants";

import Link from "next/link";

import styles from "./FlowPage.module.css";

export const FlowPage = () => {
  const proOptions = { hideAttribution: true };

  const reactFlowWrapper = useRef(null);

  const [nodes, setNodes] = useNodesState<Node>([]);
  const [edges, setEdges] = useEdgesState<Edge>([]);

  useEffect(() => getItems(setNodes, setEdges), [setNodes, setEdges]);

  return (
    <div className={styles.card}>
      <ReactFlowProvider>
        <div className={styles.roadmap} ref={reactFlowWrapper}>
          <ReactFlow
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
            <Controls />
            <Background />
          </ReactFlow>
          <style>
            {`
          .react-flow__controls {
            background: #1e1e1e;
            border: 1px solid #444;
            box-shadow: 0 0 5px rgba(0,0,0,0.5);
          }

          .react-flow__controls-button {
            background: #2c2c2c;
            color: #fff;
            border: none;
          }

          .react-flow__controls-button:hover {
            background: #3c3c3c;
          }

          .react-flow__controls-button svg {
            fill: #fff;
          }
        `}
          </style>
        </div>
      </ReactFlowProvider>
    </div>
  );
};
