import { ReactFlowProvider } from "@xyflow/react";

import { DevelopmentFlow } from "@/shared/features/DevelopmentFlow";

export const DevelopmentFlowPage = () => {
  return (
    <ReactFlowProvider>
      <DevelopmentFlow />
    </ReactFlowProvider>
  );
};
