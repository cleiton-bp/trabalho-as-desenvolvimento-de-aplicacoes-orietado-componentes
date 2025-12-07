import { toast, type ToastOptions } from "react-toastify";

type ToastTypes = {
  success: (msg: string, options?: ToastOptions) => void;
  error: (msg: string, options?: ToastOptions) => void;
  warn: (msg: string, options?: ToastOptions) => void;
};

export const showToast: ToastTypes = {
  success: (msg, options) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      ...options,
    }),

  error: (msg, options) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 3000,
      ...options,
    }),

  warn: (msg, options) =>
    toast.warn(msg, {
      position: "top-right",
      autoClose: 3000,
      ...options,
    }),
};
