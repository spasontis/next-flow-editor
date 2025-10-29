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

import { InputNode } from "@/shared/components/InputNode";
import { DevTools } from "@/shared/features/DevTools";

import { getItems, resetSelected } from "../actions";
import { nodeOrigin } from "../constants";
import { useFlowConnect, useFlowConnectEnd, useNodeDataChange } from "../hooks";

import styles from "./WorkFlow.module.css";

export const WorkFlow = () => {
  const reactFlowWrapper = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const [selectedNode, setSelectedNode] = useState<Node | undefined>(undefined);
  const [selectedEdge, setSelectedEdge] = useState<Edge | undefined>(undefined);

  const idRef = useRef<number>(1);

  const nodeTypes = {
    customNode: InputNode,
  };

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

  const handleNodeLabelChange = useNodeDataChange(setNodes, selectedNode?.id);

  const editedNodes = nodes.map((node) => ({
    ...node,
    data: { ...node.data, onChange: handleNodeLabelChange },
  }));

  return (
    <div className={styles.roadmap} ref={reactFlowWrapper}>
      <ReactFlow
        colorMode="dark"
        nodes={editedNodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectEnd={onConnectEnd}
        onNodeClick={(event, node) => onClick({ node })}
        onEdgeClick={(event, edge) => onClick({ edge })}
        onPaneClick={() => onClick({})}
        fitView
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
