import { useState } from "react";

type ToastColor = "default" | "red" | "green";

export const useShowToast = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastColor, setToastColor] = useState<string>("default");

  const showToast = (message: string, toastColor: ToastColor) => {
    setToastMessage(message);
    setToastColor(toastColor);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return { toastMessage, toastColor, showToast };
};
