"use client";

import { useEffect, useRef, useState } from "react";
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  useReactFlow,
  Node,
  Edge,
  OnConnectEnd,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { DevTools } from "@/shared/components/DevTools";

import { useFlowConnect, useFlowConnectEnd } from "../hooks";
import { resetSelected } from "../actions";

import styles from "./Flow.module.css";
import { getItems } from "../hooks/useFlowGetItems";

export const Flow = () => {
  const proOptions = { hideAttribution: true };
  const reactFlowWrapper = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const [selectedNode, setSelectedNode] = useState<Node | undefined>(undefined);
  const [selectedEdge, setSelectedEdge] = useState<Edge | undefined>(undefined);

  const idRef = useRef<number>(1);

  const nodeOrigin: [number, number] = [0.5, 0];

  const { screenToFlowPosition } = useReactFlow();

  const onConnect = useFlowConnect(setEdges);

  const onConnectEnd: OnConnectEnd = useFlowConnectEnd({
    setNodes,
    setEdges,
    screenToFlowPosition,
    idRef,
  });

  useEffect(() => {
    getItems(setNodes, setEdges, idRef);
  }, []);

  const onClick = resetSelected(setSelectedNode, setSelectedEdge);

  return (
    <div className={styles.roadmap} ref={reactFlowWrapper}>
      <ReactFlow
        colorMode="dark"
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectEnd={onConnectEnd}
        onNodeClick={(event, node) => onClick({ node })}
        onEdgeClick={(event, edge) => onClick({ edge })}
        onPaneClick={() => onClick({})}
        fitView
        proOptions={proOptions}
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={nodeOrigin}
      >
        <DevTools
          selectedNode={selectedNode}
          selectedEdge={selectedEdge}
          setSelectedNode={setSelectedNode}
          nodes={nodes}
          edges={edges}
          setNodes={setNodes}
          setEdges={setEdges}
        />
        <Background />
      </ReactFlow>
    </div>
  );
};
