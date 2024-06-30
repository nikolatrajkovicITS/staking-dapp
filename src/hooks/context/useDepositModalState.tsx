import { useCallback, useContext } from "react";
import depositModalContext from "@/context/depositModal/depositModal.context";
import {
  DepositModalTypes,
  DepositModalActionTypes,
} from "@/context/depositModal/depositModal.types";

const useDepositModalState = (): DepositModalTypes => {
  const context = useContext(depositModalContext);

  if (!Object.keys(context).length) {
    throw new Error("DepositModalContext must be used within its provider");
  }

  const { state, dispatch } = context;

  const setAmount = useCallback(
    (amount: string) =>
      dispatch({
        type: DepositModalActionTypes.SET_AMOUNT,
        amount,
      }),
    [dispatch]
  );

  const setTxHash = useCallback(
    (txHash: string) =>
      dispatch({ type: DepositModalActionTypes.COMPLETE_TRANSACTION, txHash }),
    [dispatch]
  );

  const startLoading = useCallback(
    () => dispatch({ type: DepositModalActionTypes.START_LOADING }),
    [dispatch]
  );

  const stopLoading = useCallback(
    () => dispatch({ type: DepositModalActionTypes.STOP_LOADING }),
    [dispatch]
  );

  const setError = useCallback(
    (error: string) =>
      dispatch({ type: DepositModalActionTypes.SET_ERROR, error }),
    [dispatch]
  );

  const updateTransactionStatus = useCallback(
    () =>
      dispatch({
        type: DepositModalActionTypes.COMPLETE_TRANSACTION,
        txHash: "",
      }),
    [dispatch]
  );

  return {
    ...state,
    setAmount,
    setTxHash,
    startLoading,
    stopLoading,
    setError,
    updateTransactionStatus,
  };
};

export default useDepositModalState;
