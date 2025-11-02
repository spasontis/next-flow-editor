"use client";

import { DevelopmentNodeData } from "../types";

import clsx from "clsx";

import styles from "./DevelopmentNode.module.css";

export const DevelopmentNodeBase = ({
  id,
  data,
  selected,
}: {
  id: string;
  data: DevelopmentNodeData;
  selected?: boolean;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    data.onChange?.(id, e.target.value);
  };

  return (
    <>
      <input
        className={clsx(styles.input, selected && styles.border)}
        type="text"
        placeholder={`Node ${id}`}
        onChange={handleChange}
        value={data.label}
      />
    </>
  );
};
