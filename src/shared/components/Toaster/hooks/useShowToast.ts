import { useCallback, useState } from "react";

type ToastColor = "default" | "red" | "green";

export const useShowToast = () => {
  const [toastMessage, setToastMessage] = useState<string>("");
  const [toastColor, setToastColor] = useState<ToastColor>("default");

  const showToast = useCallback((message: string, color: ToastColor) => {
    setToastMessage(message);
    setToastColor(color);
    setTimeout(() => setToastMessage(""), 3000);
  }, []);

  // обёртка для любых функций с уведомлением
  const withToast = useCallback(
    (fn: () => void, message: string, color: ToastColor) => () => {
      fn();
      showToast(message, color);
    },
    [showToast]
  );

  return { toastMessage, toastColor, showToast, withToast };
};
