import { AlertColor } from "@mui/material";

export enum ToastActionTypes {
  SET_TOAST = "SET_TOAST",
  REMOVE_TOAST = "REMOVE_TOAST",
}

export type Toast = {
  type: AlertColor;
  title: string;
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  txHash?: string;
  isClosable?: boolean;
  onCloseCallback?: () => void;
};

export type ToastActions =
  | {
      type: ToastActionTypes.SET_TOAST;
      payload: Toast;
    }
  | {
      type: ToastActionTypes.REMOVE_TOAST;
    };

export type ToastStateType = {
  toast: Toast | null;
};

export type ToastFunctions = {
  setToast: (toast: Omit<Toast, "removeToast">) => void;
  removeToast: () => void;
};

export type ToastTypes = ToastStateType & ToastFunctions;
