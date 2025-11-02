import { Node, SetNodes } from "@/shared/types";
import { elementsOptions } from "../constants";
import styles from "./ElementsMenu.module.css";
import { Panel } from "@xyflow/react";
import clsx from "clsx";
import { useState } from "react";
import { Plus, X } from "lucide-react";

export const ElementsMenu = ({
  nodes,
  setNodes,
}: {
  nodes: Node[];
  setNodes: SetNodes;
}) => {
  const [elementsMenuOpen, setElementsMenuOpen] = useState(false);
  const onAdd = (type: string) => {
    const newNode: Node = {
      id: (nodes.length + 1).toString(),
      position: { x: 100, y: 100 },
      type,
      data: { label: `Node ${nodes.length + 1}` },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  return (
    <Panel position="top-left">
      <div className={styles.menu}>
        <button
          className={styles.button}
          onClick={() => {
            setElementsMenuOpen((prev) => !prev);
          }}
        >
          {elementsMenuOpen ? <X /> : <Plus />}
        </button>
        {elementsMenuOpen && (
          <div>
            <div className={styles.elements}>
              {elementsOptions.map((opt) => (
                <div key={opt.type}>
                  <h5>{opt.type}</h5>
                  <button
                    onClick={() => onAdd(opt.type)}
                    className={styles.element}
                  >
                    {opt.label}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Panel>
  );
};
