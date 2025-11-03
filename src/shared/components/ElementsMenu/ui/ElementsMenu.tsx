import { useState } from "react";
import { Plus, X } from "lucide-react";

import { Node, SetNodes } from "@/shared/types";
import { elementsOptions } from "../constants";

import styles from "./ElementsMenu.module.css";
import { onAdd } from "../actions";
import clsx from "clsx";
export const ElementsMenu = ({
  nodes,
  setNodes,
}: {
  nodes: Node[];
  setNodes: SetNodes;
}) => {
  const [elementsMenuOpen, setElementsMenuOpen] = useState(false);

  return (
    <div className={clsx(styles.menu, elementsMenuOpen && styles.menuOpen)}>
      <div className={styles.header}>
        <button
          className={styles.button}
          onClick={() => {
            setElementsMenuOpen((prev) => !prev);
          }}
        >
          {elementsMenuOpen ? <X /> : <Plus />}
        </button>
        {elementsMenuOpen && <div className={styles.title}>Elements menu</div>}
      </div>
      {elementsMenuOpen && (
        <div className={styles.elements}>
          {elementsOptions.map((opt) => (
            <div key={opt.type} className={styles.label}>
              <h5>{opt.title}</h5>
              <button
                onClick={() => onAdd({ nodes, type: opt.type, setNodes })}
                className={styles.element}
              >
                {opt.preview}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
