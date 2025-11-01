import {
  ArrowBigDown,
  ArrowBigLeft,
  ArrowBigRight,
  ArrowBigUp,
} from "lucide-react";

import { DevelopmentNodeData } from "@/shared/components/DevelopmentNode";

import clsx from "clsx";

import styles from "./Handles.module.css";

export const Handles = ({
  id,
  data,
  setMenuOpen: setMenuOpen,
}: {
  id: string;
  data: DevelopmentNodeData;
  setMenuOpen: (open: boolean) => void;
}) => {
  return (
    <div className={styles.handles}>
      <button
        className={clsx(
          styles.handle,
          styles.h_handles,
          data.nodeType === "customNodeH" && styles.active
        )}
      >
        <div>left</div>
        <ArrowBigLeft width={12} height={12} />
      </button>
      <div className={styles.v_handles}>
        <button
          className={clsx(
            styles.handle,
            data.nodeType === "customNodeV" && styles.active
          )}
        >
          <div>top</div>
          <ArrowBigUp width={12} height={12} />
        </button>
        <button
          className={clsx(
            styles.handle,
            data.nodeType === "customNodeV" && styles.active
          )}
        >
          <ArrowBigDown width={12} height={12} />
          <div>bottom</div>
        </button>
      </div>
      <button
        className={clsx(
          styles.handle,
          styles.h_handles,
          data.nodeType === "customNodeH" && styles.active
        )}
      >
        <ArrowBigRight width={12} height={12} />
        <div>right</div>
      </button>
      <button
        className={styles.changeType}
        onClick={() => {
          const current = data.nodeType || "customNodeV";
          const next =
            current === "customNodeV" ? "customNodeH" : "customNodeV";
          data.onTypeChange?.(id, next);
          setMenuOpen(false);
        }}
      >
        change type
      </button>
    </div>
  );
};
