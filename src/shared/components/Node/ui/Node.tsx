import { Handle, Position } from "@xyflow/react";

import { NodeData } from "../types";

import styles from "./Node.module.css";

export const NodeBase = ({ label }: { label: string }) => {
  return <div className={styles.label}>{label}</div>;
};

export const NodeDefault = ({ data }: { data: NodeData }) => {
  return (
    <div className={styles.node}>
      <NodeBase label={data.label} />
    </div>
  );
};

export const NodeVertical = ({ data }: { data: NodeData }) => {
  return (
    <>
      <NodeDefault data={data} />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export const NodeVerticalIn = ({ data }: { data: NodeData }) => {
  return (
    <>
      <NodeDefault data={data} />
      <Handle type="target" position={Position.Top} />
    </>
  );
};

export const NodeVerticalOut = ({ data }: { data: NodeData }) => {
  return (
    <>
      <NodeDefault data={data} />
      <Handle type="source" position={Position.Bottom} />
    </>
  );
};

export const NodeHorizontal = ({ data }: { data: NodeData }) => {
  return (
    <>
      <NodeDefault data={data} />
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export const NodeHorizontalIn = ({ data }: { data: NodeData }) => {
  return (
    <>
      <NodeDefault data={data} />
      <Handle type="target" position={Position.Left} />
    </>
  );
};

export const NodeHorizontalOut = ({ data }: { data: NodeData }) => {
  return (
    <>
      <NodeDefault data={data} />
      <Handle type="source" position={Position.Right} />
    </>
  );
};
