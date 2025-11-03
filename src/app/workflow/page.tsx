import { DevelopmentFlowPage } from "@/pages/DevelopmentFlow";
import { ReactFlowProvider } from "@xyflow/react";

export default function WorkFlow() {
  return (
    <ReactFlowProvider>
      <DevelopmentFlowPage />
    </ReactFlowProvider>
  );
}
