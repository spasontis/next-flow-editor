"use client";

import { Handle, Position } from "@xyflow/react";
import { NodeSettings } from "../../NodeSettings";
import { DevelopmentNodeData } from "../types";

import clsx from "clsx";

import styles from "./DevelopmentNode.module.css";

export const DevelopmentNodeBase = ({
  id,
  data,
}: {
  id: string;
  data: DevelopmentNodeData;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    data.onChange?.(id, e.target.value);
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder={`Node ${id}`}
      onChange={handleChange}
      value={data.label}
    />
  );
};

export const DevelopmentNodeDefault = ({
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
      <DevelopmentNodeBase id={id} data={data} />
      {selected && <NodeSettings id={id} data={data} />}
    </div>
  );
};

export const DevelopmentNodeVertical = ({
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
      {selected && <NodeSettings id={id} data={data} />}
      <DevelopmentNodeBase id={id} data={data} />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export const DevelopmentNodeVerticalIn = ({
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
      {selected && <NodeSettings id={id} data={data} />}
      <DevelopmentNodeBase id={id} data={data} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
};

export const DevelopmentNodeVerticalOut = ({
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
      {selected && <NodeSettings id={id} data={data} />}
      <DevelopmentNodeBase id={id} data={data} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export const DevelopmentNodeHorizontal = ({
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
      {selected && <NodeSettings id={id} data={data} />}
      <DevelopmentNodeBase id={id} data={data} />
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export const DevelopmentNodeHorizontalIn = ({
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
      {selected && <NodeSettings id={id} data={data} />}
      <DevelopmentNodeBase id={id} data={data} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export const DevelopmentNodeHorizontalOut = ({
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
      {selected && <NodeSettings id={id} data={data} />}
      <DevelopmentNodeBase id={id} data={data} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};
