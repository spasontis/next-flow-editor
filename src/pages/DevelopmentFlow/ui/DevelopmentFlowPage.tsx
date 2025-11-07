"use client";

import { useEffect, useRef } from "react";
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
  Controls,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { DevTools } from "@/widgets/DevTools";
import { ElementsMenu } from "@/widgets/ElementsMenu";

import { getItems, removeNode } from "../actions";
import { edgeTypes, nodeOrigin, nodeTypes } from "../constants";
import { useFlowConnect, useNodeDataChange } from "../hooks";

import styles from "./DevelopmentFlowPage.module.css";

export const DevelopmentFlowPage = () => {
  const idRef = useRef<number>(1);
  const reactFlowWrapper = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const onConnect = useFlowConnect(setEdges);
  const handleNodeLabelChange = useNodeDataChange(setNodes);

  const handleNodeRemove = removeNode(setNodes, setEdges);

  const developmentNodes = nodes.map((node) => ({
    ...node,
    data: {
      ...node.data,
      onChange: handleNodeLabelChange,
      onRemove: handleNodeRemove,
      nodeType: node.type,
    },
  }));

  useEffect(() => {
    getItems(setNodes, setEdges, idRef);
  }, [setNodes, setEdges]);

  return (
    <ReactFlowProvider>
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
          onNodeClick={(event, node) => ({ node })}
          onEdgeClick={(event, edge) => ({ edge })}
          onPaneClick={() => ({})}
          fitView
          nodeOrigin={nodeOrigin}
        >
          <ElementsMenu nodes={nodes} setNodes={setNodes} />
          <DevTools
            nodes={nodes}
            edges={edges}
            setNodes={setNodes}
            setEdges={setEdges}
          />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};
