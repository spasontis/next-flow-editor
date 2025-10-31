"use client";

import { Handle, Position } from "@xyflow/react";

import { Settings } from "@/shared/components/Settings";

import { DevelopmentNodeData } from "../types";

import clsx from "clsx";
import styles from "./DevelopmentNode.module.css";

const DevelopmentNode = ({
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
    <>
      {selected && <Settings id={id} data={data} />}
      <input
        className={clsx(styles.input, selected && styles.border)}
        type="text"
        placeholder={`Node ${id}`}
        onChange={handleChange}
        value={data.label}
      />
    </>
  );
};

export const DevelopmentNodeH = ({
  id,
  data,
  selected,
}: {
  id: string;
  data: DevelopmentNodeData;
  selected?: boolean;
}) => {
  return (
    <div className={clsx(styles.node, selected && styles.selected)}>
      <DevelopmentNode id={id} data={data} />
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export const DevelopmentNodeV = ({
  id,
  data,
  selected,
}: {
  id: string;
  data: DevelopmentNodeData;
  selected?: boolean;
}) => {
  return (
    <div className={clsx(styles.node, selected && styles.selected)}>
      <DevelopmentNode id={id} data={data} />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
