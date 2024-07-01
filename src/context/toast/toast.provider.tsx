"use client";

import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Alert,
  AlertTitle,
  Button,
  LinearProgress,
  Modal,
  Typography,
} from "@mui/material";
import { ReactNode, useReducer } from "react";

import ToastContext from "@/context/toast/toast.context";
import toastReducer from "@/context/toast/toast.reducer";
import { ToastStateType } from "@/context/toast/toast.types";

type ToastStateProps = {
  children: ReactNode;
};

const initialState: ToastStateType = {
  toast: null,
};

const ToastState: React.FC<ToastStateProps> = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, initialState);

  const handleClose = () => {
    if (state.toast?.onCloseCallback) {
      state.toast.onCloseCallback();
    }

    dispatch({ type: "REMOVE_TOAST" });
  };

  return (
    <ToastContext.Provider value={{ ...state, dispatch }}>
      {children}
      {state.toast && (
        <Modal
          open={true}
          onClose={state.toast.isClosable ? handleClose : undefined}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Alert
            severity={state.toast.type}
            sx={{ "& .MuiAlert-message": { width: "100%" } }}
            iconMapping={{ success: <CheckCircleIcon /> }}
            action={
              state.toast.isClosable && (
                <Button className="close-button" onClick={handleClose}>
                  <CloseIcon />
                </Button>
              )
            }
          >
            <AlertTitle>{state.toast.title || "Title"}</AlertTitle>
            <Typography>{state.toast.message}</Typography>
            {state.toast.action && (
              <Button
                variant="contained"
                onClick={state.toast.action.onClick}
                sx={{ mt: 2, width: "100%" }}
              >
                {state.toast.action.label}
              </Button>
            )}
            {state.toast.type === "info" && <LinearProgress sx={{ mt: 2 }} />}
          </Alert>
        </Modal>
      )}
    </ToastContext.Provider>
  );
};

export default ToastState;
