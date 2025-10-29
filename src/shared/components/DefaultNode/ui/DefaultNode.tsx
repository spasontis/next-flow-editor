import { Handle, Position } from "@xyflow/react";

import { NodeData } from "../types";

import styles from "./DefaultNode.module.css";

export const DefaultNode = ({ data }: { data: NodeData }) => {
  return (
    <div className={styles.node}>
      <div className={styles.label}>{data.label}</div>
      <Handle className={styles.handle} type="target" position={Position.Top} />
      <Handle
        className={styles.handle}
        type="source"
        position={Position.Bottom}
      />
    </div>
  );
};
