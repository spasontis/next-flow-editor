import { useState } from "react";
import { Panel } from "@xyflow/react";

import { EdgeControls } from "@/shared/components/EdgeControls";
import { NodeControls } from "@/shared/components/NodeControls";
import { UtilitiesControls } from "@/shared/components/UtilitiesControls";
import { ViewportLogger } from "@/shared/components/ViewPortLogger";
import { NodeInspector } from "@/shared/components/NodeIncpector";
import { Toaster, useShowToast } from "@/shared/components/Toaster";

import {
  Node,
  Edge,
  SetEdges,
  SetNodes,
  SetSelectedNode,
} from "@/shared/types";

import {
  useFlowRestore,
  useFlowSave,
  useEdgeChange,
  useNodeRemove,
} from "../hooks";

import styles from "./DevTools.module.css";
import Link from "next/link";

export const DevTools = ({
  nodes,
  edges,
  selectedNode,
  selectedEdge,
  setNodes,
  setEdges,
}: {
  nodes: Node[];
  edges: Edge[];
  selectedNode?: Node;
  selectedEdge?: Edge;
  setNodes: SetNodes;
  setEdges: SetEdges;
}) => {
  const [nodeInspector, setNodeInspector] = useState(false);
  const [viewportLogger, setViewportLogger] = useState(false);

  const { toastMessage, toastColor, withToast } = useShowToast();
  const saveFlow = useFlowSave({ nodes, edges });
  const restoreFlow = useFlowRestore(setNodes, setEdges);
  const changeEdgeStyle = useEdgeChange(selectedEdge, setEdges);
  const removeNode = useNodeRemove(selectedNode, setNodes, setEdges);

  const onSaveFlow = withToast(saveFlow, "Success saved", "green");
  const onRestoreFlow = withToast(restoreFlow, "Flow restored", "red");
  const onRemoveNode = withToast(removeNode, "Node removed", "red");
  const onChangeEdge = withToast(changeEdgeStyle, "Edge changed", "default");

  const onNodeInspector = () => {
    setNodeInspector((prev) => !prev);
  };
  const onViewPortLogger = () => {
    setViewportLogger((prev) => !prev);
  };

  return (
    <>
      <Panel position="top-right" className={styles.panel}>
        <div className={styles.devtools}>
          <EdgeControls
            selectedEdge={selectedEdge}
            onChangeEdge={onChangeEdge}
          />
          <NodeControls
            selectedNode={selectedNode}
            onRemoveNode={onRemoveNode}
          />
          <UtilitiesControls
            onNodeInspector={onNodeInspector}
            onViewPortLogger={onViewPortLogger}
            onSaveFlow={onSaveFlow}
            onRestoreFlow={onRestoreFlow}
          />
        </div>

        <Link href="/flow" className={styles.button}>
          Flow
        </Link>
      </Panel>

      {viewportLogger && <ViewportLogger />}
      {nodeInspector && <NodeInspector />}
      <Toaster toastMessage={toastMessage} toastColor={toastColor} />
    </>
  );
};
