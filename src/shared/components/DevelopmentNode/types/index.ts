export interface CustomNodeData {
  label: string;
  onChange?: (id: string, value: string) => void;
  onRemove?: (id: string) => void;
}
