import { ReactFlowProvider } from "@xyflow/react";

import { Flow } from "@/shared/features/Flow";

export const FlowPage = () => {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
};
