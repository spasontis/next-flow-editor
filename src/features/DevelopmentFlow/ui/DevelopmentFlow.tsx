"use client";

import { useEffect, useRef, useState } from "react";
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { DevTools } from "@/widgets/DevTools";

import { getItems, resetSelected, removeNode } from "../actions";
import { edgeTypes, nodeOrigin, nodeTypes } from "../constants";
import { useFlowConnect, useNodeDataChange } from "../hooks";

import styles from "./DevelopmentFlow.module.css";

export const DevelopmentFlow = () => {
  const idRef = useRef<number>(1);
  const reactFlowWrapper = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const [selectedNode, setSelectedNode] = useState<Node | undefined>(undefined);
  const [selectedEdge, setSelectedEdge] = useState<Edge | undefined>(undefined);

  const onConnect = useFlowConnect(setEdges);
  const handleNodeLabelChange = useNodeDataChange(setNodes);

  const handleNodeRemove = removeNode(setNodes, setEdges, setSelectedNode);
  const onClick = resetSelected(setSelectedNode, setSelectedEdge);

  const developmentNodes = nodes.map((node) => ({
    ...node,
    data: {
      ...node.data,
      onChange: handleNodeLabelChange,
      onRemove: handleNodeRemove,
      onTypeChange: (id: string, type: string) => {
        setNodes((nds) => nds.map((n) => (n.id === id ? { ...n, type } : n)));
      },
      nodeType: node.type,
    },
  }));

  useEffect(() => {
    getItems(setNodes, setEdges, idRef);
  }, [setNodes, setEdges]);

  return (
    <div className={styles.roadmap} ref={reactFlowWrapper}>
      <ReactFlow
        colorMode="dark"
        nodes={developmentNodes}
        nodeTypes={nodeTypes}
        edges={edges}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={(event, node) => onClick({ node })}
        onEdgeClick={(event, edge) => onClick({ edge })}
        onPaneClick={() => onClick({})}
        fitView
        nodeOrigin={nodeOrigin}
      >
        <DevTools
          selectedNode={selectedNode}
          selectedEdge={selectedEdge}
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
