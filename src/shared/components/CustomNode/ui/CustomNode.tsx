import { Handle, Position } from "@xyflow/react";

import styles from "./CustomNode.module.css";
import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CustomNode = ({ data }: any) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(100);
  const [value, setValue] = useState(data.label || "");
  useEffect(() => {
    if (spanRef.current) {
      setWidth(spanRef.current.offsetWidth + 10); // +10px для отступа
    }
  }, [value]);

  return (
    <div className={styles.node}>
      <input
        className={styles.input}
        type="text"
        placeholder={data.label}
        onChange={(e) => setValue(e.target.value)}
        style={{ width }}
      />
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};
