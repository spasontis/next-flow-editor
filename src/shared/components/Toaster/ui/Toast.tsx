import clsx from "clsx";

import styles from "./Toast.module.css";

interface ToastProps {
  toastMessage: string;
  toastColor: string;
}

export const Toast = ({ toastMessage, toastColor }: ToastProps) => {
  return (
    <>
      {toastMessage && (
        <div className={clsx(styles.toast, styles[toastColor])}>
          {toastMessage}
        </div>
      )}
    </>
  );
};
