import { useState } from "react";
import { X } from "lucide-react";
import clsx from "clsx";

import { DevelopmentNodeData } from "@/shared/components/DevelopmentNode";

import { DataControl } from "./DataControl";

import styles from "./Settings.module.css";

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

  return (
    <div className={styles.overlay} onClick={() => setMenuOpen(false)}>
      <div className={styles.settings} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.title}>Settings</div>
          <div className={styles.label}>
            {data.label !== "" ? data.label : `Node ${id}`}
          </div>
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
          </div>

          {dataOpen && <DataControl id={id} />}
        </div>
      </div>
    </div>
  );
};
