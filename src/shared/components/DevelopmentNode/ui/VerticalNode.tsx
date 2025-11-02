import { Handle, Position } from "@xyflow/react";

import clsx from "clsx";

import { NodeSettings } from "@/shared/components/NodeSettings";

import { DevelopmentNodeData } from "../types";

import { DevelopmentNodeBase } from "./DevelopmentNodeBase";

import styles from "./DevelopmentNode.module.css";

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
