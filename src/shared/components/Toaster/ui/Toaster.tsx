import clsx from "clsx";

import styles from "./Toaster.module.css";

interface ToastProps {
  toastMessage: string;
  toastColor: string;
}

export const Toaster = ({ toastMessage, toastColor }: ToastProps) => {
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
