import { useNodes, useReactFlow, ViewportPortal } from "@xyflow/react";
import styles from "./DevTools.module.css";

export function NodeInspector() {
  const { getInternalNode } = useReactFlow();
  const nodes = useNodes();

  return (
    <ViewportPortal>
      <div className="inspector">
        {nodes.map((node) => {
          const internalNode = getInternalNode(node.id);
          if (!internalNode) return null;

          const absPosition = internalNode?.internals.positionAbsolute;
          const width = node.measured?.width ?? 0;
          const height = node.measured?.height ?? 0;

          if (!width || !height) return null;

          return (
            <div
              key={node.id}
              className={styles.inspector}
              style={{
                position: "absolute",
                transform: `translate(${absPosition.x}px, ${
                  absPosition.y + height
                }px)`,
                width: width * 2,
              }}
            >
              <div>id: {node.id}</div>
              <div>type: {node.type || "default"}</div>
              <div>selected: {node.selected ? "true" : "false"}</div>
              <div>
                position: {node.position.x.toFixed(1)},{" "}
                {node.position.y.toFixed(1)}
              </div>
            </div>
          );
        })}
      </div>
    </ViewportPortal>
  );
}
