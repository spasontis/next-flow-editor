import { Flow } from "@/shared/components/Flow/ui/Flow";
import { ReactFlowProvider } from "@xyflow/react";

export const FlowPage = () => {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
};
