import { Handle, Position } from "@xyflow/react";

import styles from "./CustomNode.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CustomNode = ({ data }: any) => {
  return (
    <div className={styles.node}>
      <input className={styles.input} type="text" placeholder={data.label} />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
