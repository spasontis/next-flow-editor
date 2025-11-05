import React from "react";
import { Settings, X } from "lucide-react";
import { useState } from "react";
import { useReactFlow } from "@xyflow/react";

import { Edge } from "@/shared/types";
import { changeAnimated, removeEdge } from "../actions";

import clsx from "clsx";

import styles from "./EdgeSettings.module.css";

export const EdgeSettings = ({ id }: { id: string }) => {
  const { getEdges, setEdges } = useReactFlow();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const edges = getEdges();
  const currentEdge = edges.find((e: Edge) => e.id === id);
  const isAnimated = Boolean(currentEdge?.animated);

  const onEdgeRemove = () => removeEdge(id, setEdges);
  const onAnimatedChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    changeAnimated(id, e.target.checked, setEdges);

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
              onClick={onEdgeRemove}
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
