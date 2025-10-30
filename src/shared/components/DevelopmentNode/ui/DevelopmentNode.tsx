import { Handle, Position } from "@xyflow/react";

import clsx from "clsx";

import { CustomNodeData } from "../types";

import styles from "./DevelopmentNode.module.css";

export const DevelopmentNode = ({
  id,
  data,
  selected,
}: {
  id: string;
  data: CustomNodeData;
  selected?: boolean;
  hovered?: boolean;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    data.onChange?.(id, e.target.value);
  };

  return (
    <div className={clsx(styles.node, selected && styles.selected)}>
      <input
        className={styles.input}
        type="text"
        placeholder={`Node ${id}`}
        onChange={handleChange}
        value={data.label}
      />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
