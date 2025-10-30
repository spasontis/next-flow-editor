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
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { DevTools } from "@/widgets/DevTools";

import { getItems, resetSelected } from "../actions";
import { nodeOrigin, nodeTypes } from "../constants";
import { useFlowConnect, useFlowConnectEnd, useNodeDataChange } from "../hooks";

import styles from "./DevelopmentFlow.module.css";

export const DevelopmentFlow = () => {
  const reactFlowWrapper = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const [selectedNode, setSelectedNode] = useState<Node | undefined>(undefined);
  const [selectedEdge, setSelectedEdge] = useState<Edge | undefined>(undefined);

  const idRef = useRef<number>(1);

  const { screenToFlowPosition } = useReactFlow();
  const handleNodeLabelChange = useNodeDataChange(setNodes);
  const onConnect = useFlowConnect(setEdges);
  const onConnectEnd: OnConnectEnd = useFlowConnectEnd({
    setNodes,
    setEdges,
    screenToFlowPosition,
    idRef,
  });

  const onClick = resetSelected(setSelectedNode, setSelectedEdge);

  const editedNodes = nodes.map((node) => ({
    ...node,
    data: { ...node.data, onChange: handleNodeLabelChange },
  }));

  useEffect(() => {
    getItems(setNodes, setEdges, idRef);
  }, [setNodes, setEdges]);

  return (
    <ReactFlowProvider>
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
            nodes={nodes}
            edges={edges}
            setNodes={setNodes}
            setEdges={setEdges}
          />
          <Background />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};
