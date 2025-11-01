import { useState } from "react";
import { X } from "lucide-react";
import clsx from "clsx";

import { DevelopmentNodeData } from "@/shared/components/DevelopmentNode";
import { Handles } from "./Handles";

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
  const [handlesOpen, setHandlesOpen] = useState(true);

  const onClick = () => {
    setHandlesOpen(true);
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
              className={clsx(styles.control, handlesOpen && styles.opened)}
              onClick={onClick}
            >
              handles
            </button>
          </div>

          {handlesOpen && (
            <Handles id={id} data={data} setMenuOpen={setMenuOpen} />
          )}
        </div>
      </div>
    </div>
  );
};
