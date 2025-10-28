export interface CustomNodeData {
  id: string;
  label: string;
  onChange?: (id: string, value: string) => void; // функция для обновления в Flow
}
