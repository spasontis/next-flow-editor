"use client";

import { Handle, Position } from "@xyflow/react";
import { NodeSettings } from "../../NodeSettings";
import { DevelopmentNodeData } from "../types";

import clsx from "clsx";

import styles from "./DevelopmentNode.module.css";

export const DevelopmentNodeBase = ({
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
    <input
      className={clsx(styles.input, selected && styles.border)}
      type="text"
      placeholder={`Node ${id}`}
      onChange={handleChange}
      value={data.label}
    />
  );
};

export const DevelopmentNode = ({
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
    </div>
  );
};

export const VerticalNode = ({
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

export const VerticalNodeIn = ({
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

export const VerticalNodeOut = ({
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

export const HorizontalNode = ({
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

export const HorizontalNodeIn = ({
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

export const HorizontalNodeOut = ({
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
