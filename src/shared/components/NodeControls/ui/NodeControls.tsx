import { useState } from "react";
import { Settings2, X } from "lucide-react";

import { DevelopmentNodeData } from "@/shared/components/DevelopmentNode";
import { Settings } from "./Settings";
import styles from "./NodeControls.module.css";

export const NodeControls = ({
  id,
  data,
}: {
  id: string;
  data: DevelopmentNodeData;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <button
          className={styles.pref}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <Settings2 width={10} height={8} />
        </button>
        <div className={styles.label}>Node {id}</div>
        <button className={styles.remove} onClick={() => data.onRemove?.(id)}>
          <X width={8} height={8} />
        </button>
      </div>
      {menuOpen && <Settings id={id} data={data} setMenuOpen={setMenuOpen} />}
    </>
  );
};
