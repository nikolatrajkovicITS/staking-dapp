import { useCallback, useContext } from "react";

import toastContext from "@/context/toast/toast.context";
import {
  Toast,
  ToastActionTypes,
  ToastTypes,
} from "@/context/toast/toast.types";

const useToastState = (): ToastTypes => {
  const context = useContext(toastContext);

  if (!Object.keys(context).length) {
    throw new Error("ToastContext must be used within its provider");
  }

  const { dispatch } = context;

  const setToast = useCallback(
    (toast: Omit<Toast, "removeToast">) => {
      dispatch({
        type: ToastActionTypes.SET_TOAST,
        payload: {
          ...toast,
          isClosable: toast.isClosable === undefined ? true : toast.isClosable,
        },
      });
    },
    [dispatch]
  );

  return {
    ...context,
    setToast,
    removeToast: () => dispatch({ type: ToastActionTypes.REMOVE_TOAST }),
  };
};

export default useToastState;
