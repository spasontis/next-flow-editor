import React from "react";
import { Settings, X } from "lucide-react";
import { useState } from "react";

import styles from "./EdgeSettings.module.css";
import { Edge, useReactFlow } from "@xyflow/react";
import clsx from "clsx";

export const EdgeSettings = ({ id }: { id: string }) => {
  const { getEdges, setEdges } = useReactFlow();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const edges = getEdges();
  const currentEdge = edges.find((e: Edge) => e.id === id);
  const isAnimated = Boolean(currentEdge?.animated);

  const onAnimatedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setEdges((eds) =>
      eds.map((edge) =>
        edge.id === id ? { ...edge, animated: checked } : edge
      )
    );
  };

  return (
    <>
      {!settingsOpen && (
        <button onClick={() => setSettingsOpen(true)}>
          <Settings width={16} height={16} />
        </button>
      )}
      {settingsOpen && (
        <div className={styles.settings}>
          <div className={styles.header}>
            <Settings width={8} height={8} />
            <div className={styles.label}>{id}</div>
            <button
              className={clsx(styles.button, styles.close)}
              onClick={() => setSettingsOpen(false)}
            >
              <X width={8} height={8} />
            </button>
          </div>
          <div className={styles.content}>
            <div className={styles.option}>
              <input
                className={styles.checkbox}
                type="checkbox"
                checked={isAnimated}
                onChange={onAnimatedChange}
              />
              Animated
            </div>
          </div>
        </div>
      )}
    </>
  );
};
