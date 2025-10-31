import { Handle, Position } from "@xyflow/react";

import { Settings } from "@/shared/components/Settings";

import { DevelopmentNodeData } from "../types";
import { DEFAULT_HANDLES } from "@/features/DevelopmentFlow/constants/handles";

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

  const handles = { ...DEFAULT_HANDLES, ...(data.handles || {}) };

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
      {handles.top && <Handle type="target" position={Position.Top} />}
      {handles.bottom && <Handle type="source" position={Position.Bottom} />}
      {handles.left && <Handle type="source" position={Position.Left} />}
      {handles.right && <Handle type="source" position={Position.Right} />}
    </div>
  );
};
