import { Handle, Position } from "@xyflow/react";

import styles from "./CustomNode.module.css";

import { CustomNodeData } from "../types";

export const CustomNode = ({
  id,
  data,
}: {
  id: string;
  data: CustomNodeData;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    data.onChange?.(id, e.target.value);
  };

  return (
    <div className={styles.node}>
      <input
        className={styles.input}
        type="text"
        placeholder={data.label}
        onChange={handleChange}
        value={data.label}
      />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
