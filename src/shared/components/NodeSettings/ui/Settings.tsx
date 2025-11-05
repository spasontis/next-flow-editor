import { useState } from "react";
import { X } from "lucide-react";
import clsx from "clsx";

import { DevelopmentNodeData } from "@/shared/components/DevelopmentNode";

import { DataControl } from "./DataControl";

import styles from "./Settings.module.css";
import { useReactFlow } from "@xyflow/react";

export const Settings = ({
  id,
  data,
  setMenuOpen: setMenuOpen,
}: {
  id: string;
  data: DevelopmentNodeData;
  setMenuOpen: (open: boolean) => void;
}) => {
  const [dataOpen, setDataOpen] = useState(true);

  const onClickData = () => {
    setDataOpen(true);
  };

  const { setNodes } = useReactFlow();
  const changeNodeColor = (color: string) => {
    setNodes((nodes) =>
      nodes.map((node) =>
        node.id === id
          ? {
              ...node,
              style: {
                ...node.style,
                background: color,
              },
            }
          : node
      )
    );
  };
  return (
    <div className={styles.overlay} onClick={() => setMenuOpen(false)}>
      <div className={styles.settings} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h4 className={styles.title}>Settings</h4>
          <h5>{data.label}</h5>
          <button className={styles.close} onClick={() => setMenuOpen(false)}>
            <X width={10} height={10} />
          </button>
        </div>
        <div className={styles.menu}>
          <div className={styles.controls}>
            <button
              className={clsx(styles.control, dataOpen && styles.opened)}
              onClick={onClickData}
            >
              data
            </button>
            <button onClick={() => changeNodeColor("lightgreen")}>
              Сделать зелёным
            </button>
          </div>
          {dataOpen && <DataControl id={id} />}
        </div>
      </div>
    </div>
  );
};
