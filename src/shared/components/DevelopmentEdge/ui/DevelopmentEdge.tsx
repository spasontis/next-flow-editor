import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useStore,
} from "@xyflow/react";
import { EdgeSettings } from "../../EdgeSettings/ui/EdgeSettings";

export const DevelopmentEdge = ({
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
  const isSelected = useStore((state) =>
    state.edges.some((e) => e.id === id && e.selected)
  );

  const [edgePath, labelX, labelY] = getBezierPath({
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
      {isSelected && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
              pointerEvents: "all",
            }}
          >
            <EdgeSettings id={id} />
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
};
