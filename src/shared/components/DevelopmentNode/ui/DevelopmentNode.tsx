import { Handle, Position } from "@xyflow/react";

import { Settings } from "@/shared/components/Settings";

import { DevelopmentNodeData } from "../types";

import clsx from "clsx";
import styles from "./DevelopmentNode.module.css";

export const DevelopmentNode = ({
  id,
  data,
  selected,
}: {
  id: string;
  data: DevelopmentNodeData;
  selected?: boolean;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    data.onChange?.(id, e.target.value);
  };

  return (
    <div className={clsx(styles.node, selected && styles.selected)}>
      {selected && <Settings id={id} data={data} />}
      <input
        className={clsx(styles.input, selected && styles.border)}
        type="text"
        placeholder={`Node ${id}`}
        onChange={handleChange}
        value={data.label}
      />
      {data.handles?.map((handle) => (
        <Handle key={handle.id} type={handle.type} position={Position.Top} />
      ))}
    </div>
  );
};
