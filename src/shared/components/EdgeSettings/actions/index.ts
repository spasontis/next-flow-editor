import { SetEdges } from "@/shared/types";

export const removeEdge = (id: string, setEdges: SetEdges) => {
  setEdges((eds) => eds.filter((edge) => edge.id !== id));
};

export const changeAnimated = (
  id: string,

  checked: boolean,

  setEdges: SetEdges
) => {
  setEdges((eds) =>
    eds.map((edge) => (edge.id === id ? { ...edge, animated: checked } : edge))
  );
};
