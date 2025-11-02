import { useNodes } from "@xyflow/react";

import styles from "./DataControl.module.css";

export const DataControl = ({ id }: { id: string }) => {
  const nodes = useNodes();
  const node = nodes.find((n) => n.id === id);

  return (
    <div className={styles.content}>
      <div key={id}>
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
