export interface DevelopmentNodeData {
  label: string;
  handles: {
    top: boolean;
    bottom: boolean;
    left: boolean;
    right: boolean;
  };
  onChange?: (id: string, value: string) => void;
  onRemove?: (id: string) => void;
}
