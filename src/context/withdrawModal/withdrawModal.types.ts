export enum WithdrawModalActionTypes {
  SET_AMOUNT = "SET_AMOUNT",
  COMPLETE_TRANSACTION = "COMPLETE_TRANSACTION",
  START_LOADING = "START_LOADING",
  STOP_LOADING = "STOP_LOADING",
  SET_ERROR = "SET_ERROR",
}

export type WithdrawModalActions =
  | { type: WithdrawModalActionTypes.SET_AMOUNT; amount: string }
  | { type: WithdrawModalActionTypes.COMPLETE_TRANSACTION; txHash: string }
  | { type: WithdrawModalActionTypes.START_LOADING }
  | { type: WithdrawModalActionTypes.STOP_LOADING }
  | { type: WithdrawModalActionTypes.SET_ERROR; error: string };

export type WithdrawModalStateType = {
  loading: boolean;
  completed: boolean;
  amount: string;
  txHash: string | undefined;
  error: string | null;
};

export type WithdrawModalFunctions = {
  setAmount: (amount: string) => void;
  setTxHash: (txHash: string) => void;
  startLoading: () => void;
  stopLoading: () => void;
  setError: (error: string) => void;
  updateTransactionStatus: () => void;
};

export type WithdrawModalTypes = WithdrawModalStateType &
  WithdrawModalFunctions;
