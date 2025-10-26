"use client";

import { useCallback, useRef } from "react";
import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  Connection,
  Node,
  Edge,
  OnConnectEnd,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import styles from "./Flow.module.css";
import { NodeInspector } from "../../NodeIncpector/ui/NodeInspector";

import { ViewportLogger } from "@/shared/components/ViewPortLogger";
import { NewNode } from "@/shared/components/NewNode";
import { initialNodes } from "../constants";

let id = 1;
const getId = () => `${id++}`;
const nodeOrigin: [number, number] = [0.5, 0];

export const Flow = () => {
  const proOptions = { hideAttribution: true };
  const reactFlowWrapper = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const { screenToFlowPosition } = useReactFlow();
  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onConnectEnd: OnConnectEnd = useCallback(
    (event, connectionState) => {
      // when a connection is dropped on the pane it's not valid
      if (!connectionState.isValid) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = getId();
        const { clientX, clientY } =
          "changedTouches" in event ? event.changedTouches[0] : event;
        const newNode: Node = {
          id,
          type: "default",
          position: screenToFlowPosition({
            x: clientX,
            y: clientY,
          }),
          data: {
            label: <NewNode id={id} />,
          },
          style: { width: "auto", height: "auto" },
          origin: [0.5, 0.0],
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({
            id: `${id}-edge`,
            source: connectionState.fromNode?.id || "",
            target: id,
            animated: true,
            style: { stroke: "#772DF6" },
          })
        );
      }
    },
    [screenToFlowPosition, setNodes, setEdges]
  );

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
