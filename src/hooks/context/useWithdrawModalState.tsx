import { useCallback, useContext } from "react";

import WithdrawModalContext from "@/context/withdrawModal/withdrawModal.context";
import {
  WithdrawModalActionTypes,
  WithdrawModalTypes,
} from "@/context/withdrawModal/withdrawModal.types";

const useWithdrawModalState = (): WithdrawModalTypes => {
  const context = useContext(WithdrawModalContext);

  if (!Object.keys(context).length) {
    throw new Error("WithdrawModalContext must be used within its provider");
  }

  const { state, dispatch } = context;

  const setAmount = useCallback(
    (amount: string) =>
      dispatch({
        type: WithdrawModalActionTypes.SET_AMOUNT,
        amount,
      }),
    [dispatch]
  );

  const setTxHash = useCallback(
    (txHash: string) =>
      dispatch({ type: WithdrawModalActionTypes.COMPLETE_TRANSACTION, txHash }),
    [dispatch]
  );

  const startLoading = useCallback(
    () => dispatch({ type: WithdrawModalActionTypes.START_LOADING }),
    [dispatch]
  );

  const stopLoading = useCallback(
    () => dispatch({ type: WithdrawModalActionTypes.STOP_LOADING }),
    [dispatch]
  );

  const setError = useCallback(
    (error: string) =>
      dispatch({ type: WithdrawModalActionTypes.SET_ERROR, error }),
    [dispatch]
  );

  const updateTransactionStatus = useCallback(
    () =>
      dispatch({
        type: WithdrawModalActionTypes.COMPLETE_TRANSACTION,
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

export default useWithdrawModalState;
