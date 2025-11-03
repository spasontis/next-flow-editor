import { BaseEdge, getBezierPath } from "@xyflow/react";

export const EdgeDefault = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
}: {
  id: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  onChangeEdge?: () => void;
}) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
      />
    </>
  );
};
