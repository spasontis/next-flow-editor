export interface DevelopmentNodeData {
  label: string;
  nodeType?: string;
  onChange?: (id: string, value: string) => void;
  onRemove?: (id: string) => void;
  onTypeChange?: (id: string, type: string) => void;
}
