import { useState } from "react";

type ToastColor = "default" | "red" | "green";

export const useShowToast = () => {
  const [toastMessage, setToastMessage] = useState<string>("");
  const [toastColor, setToastColor] = useState<string>("default");

  const showToast = (message: string, toastColor: ToastColor) => {
    setToastMessage(message);
    setToastColor(toastColor);
    setTimeout(() => setToastMessage(""), 3000);
  };

  return { toastMessage, toastColor, showToast };
};
