export interface DevelopmentNodeData {
  label: string;
  onChange?: (id: string, value: string) => void;
  onRemove?: (id: string) => void;
}
