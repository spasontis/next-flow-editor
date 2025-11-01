import styles from "./Handles.module.css";
import { useNodes } from "@xyflow/react";

export const Data = ({ id }: { id: string }) => {
  const nodes = useNodes();
  const node = nodes.find((n) => n.id === id);
  return (
    <div className={styles.content}>
      <div key={id} className={styles.inspector}>
        <div>id: {node?.id}</div>
        <div>data: {JSON.stringify(node?.data.label)}</div>
        <div>type: {node?.type || "undefined"}</div>
        <div>
          position: {node?.position.x.toFixed(1)}, {node?.position.y.toFixed(1)}
        </div>
      </div>
    </div>
  );
};
