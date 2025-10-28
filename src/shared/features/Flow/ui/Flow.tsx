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
import { CustomNode } from "@/shared/components/CustomNode";

import { useFlowConnect, useFlowConnectEnd } from "../hooks";

import { getItems, resetSelected } from "../actions";

import styles from "./Flow.module.css";

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
  }, [setNodes, setEdges]);

  const onClick = resetSelected(setSelectedNode, setSelectedEdge);

  const handleNodeLabelChange = (id: string, value: string) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id
          ? { ...node, data: { ...node.data, label: value } }
          : node
      )
    );
  };

  const editedNodes = nodes.map((node) => ({
    ...node,
    data: { ...node.data, onChange: handleNodeLabelChange },
  }));

  const nodeTypes = {
    customNode: CustomNode,
  };

  return (
    <div className={styles.roadmap} ref={reactFlowWrapper}>
      <ReactFlow
        colorMode="dark"
        nodes={editedNodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectEnd={onConnectEnd}
        nodeTypes={nodeTypes}
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
