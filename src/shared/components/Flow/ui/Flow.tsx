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

import { NodeInspector } from "@/shared/components/NodeIncpector";
import { ViewportLogger } from "@/shared/components/ViewPortLogger";

import { useFlowConnect, useFlowConnectEnd } from "../hooks";

import { resetSelected } from "../actions";

import styles from "./Flow.module.css";

export const Flow = () => {
  const proOptions = { hideAttribution: true };
  const reactFlowWrapper = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const [selectedNode, setSelectedNode] = useState<Node | undefined>(undefined);
  const [selectedEdge, setSelectedEdge] = useState<Edge | undefined>(undefined);

  const idRef = useRef(1);

  useEffect(() => {
    const flowData = localStorage.getItem("myFlowData");
    if (flowData) {
      const { nodes: savedNodes, edges: savedEdges } = JSON.parse(flowData);

      setNodes(savedNodes);
      setEdges(savedEdges);

      const maxId = savedNodes.reduce(
        (max: 10, node: Node) => Math.max(max, Number(node.id)),
        0
      );
      idRef.current = maxId + 1;
    }
  }, [setNodes, setEdges]);

  const nodeOrigin: [number, number] = [0.5, 0];

  const { screenToFlowPosition } = useReactFlow();

  const onConnect = useFlowConnect(setEdges);

  const onConnectEnd: OnConnectEnd = useFlowConnectEnd({
    setNodes,
    setEdges,
    screenToFlowPosition,
  });

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
        <Background />
        <NodeInspector />
        <ViewportLogger />
      </ReactFlow>
    </div>
  );
};
