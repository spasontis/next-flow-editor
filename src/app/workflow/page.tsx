import { DevelopmentFlow } from "@/features/DevelopmentFlow";
import { ReactFlowProvider } from "@xyflow/react";

export default function WorkFlow() {
  return (
    <ReactFlowProvider>
      <DevelopmentFlow />
    </ReactFlowProvider>
  );
}
