import { useState } from "react";
import styles from "./Settings.module.css";
import {
  ArrowBigDown,
  ArrowBigLeft,
  ArrowBigRight,
  ArrowBigUp,
  Settings2,
  X,
} from "lucide-react";
import { DevelopmentNodeData } from "../../DevelopmentNode/types";
import clsx from "clsx";

export const Settings = ({
  id,
  data,
}: {
  id: string;
  data: DevelopmentNodeData;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [handlesOpen, setHandlesOpen] = useState(true);

  return (
    <>
      <div className={styles.header}>
        <button
          className={styles.open}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <Settings2 width={10} height={8} />
        </button>
        <div className={styles.label}>Node {id}</div>
        <button className={styles.remove} onClick={() => data.onRemove?.(id)}>
          <X width={8} height={8} />
        </button>
      </div>
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)}>
          <div className={styles.settings} onClick={(e) => e.stopPropagation()}>
            <div className={styles.settings_header}>
              <div className={styles.settings_title}>Settings</div>
              <div className={styles.label}>{data.label}</div>
              <button
                className={styles.close}
                onClick={() => setMenuOpen(false)}
              >
                <X width={10} height={10} />
              </button>
            </div>
            <div className={styles.menu}>
              <div className={styles.controls}>
                <button
                  className={styles.control}
                  onClick={() => {
                    setHandlesOpen(true);
                  }}
                >
                  handles
                </button>
              </div>
              <div className={styles.option}>
                {handlesOpen && (
                  <div className={styles.handles}>
                    <div>left</div>
                    <div>
                      <ArrowBigLeft width={12} height={12} />
                    </div>
                    <div className={styles.vhandles}>
                      <div>
                        <div>top</div>
                        <ArrowBigUp width={12} height={12} />
                      </div>
                      <div>
                        <ArrowBigDown width={12} height={12} />
                        <div>bottom</div>
                      </div>
                    </div>
                    <ArrowBigRight width={12} height={12} />
                    <div>right</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
