import { ReactFlowProvider } from "@xyflow/react";

import { WorkFlow } from "@/shared/features/WorkFlow";

export const WorkFlowPage = () => {
  return (
    <ReactFlowProvider>
      <WorkFlow />
    </ReactFlowProvider>
  );
};
