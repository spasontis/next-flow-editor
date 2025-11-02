import { Handle, Position } from "@xyflow/react";
import { NodeSettings } from "../../NodeSettings";
import { DevelopmentNodeData } from "../types";
import styles from "./DevelopmentNode.module.css";
import { DevelopmentNodeBase } from "./DevelopmentNodeBase";
import clsx from "clsx";

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
