export enum DepositModalActionTypes {
  SET_AMOUNT = "SET_AMOUNT",
  COMPLETE_TRANSACTION = "COMPLETE_TRANSACTION",
  START_LOADING = "START_LOADING",
  STOP_LOADING = "STOP_LOADING",
  SET_ERROR = "SET_ERROR",
}

export type DepositModalActions =
  | { type: DepositModalActionTypes.SET_AMOUNT; amount: string }
  | { type: DepositModalActionTypes.COMPLETE_TRANSACTION; txHash: string }
  | { type: DepositModalActionTypes.START_LOADING }
  | { type: DepositModalActionTypes.STOP_LOADING }
  | { type: DepositModalActionTypes.SET_ERROR; error: string };

export type DepositModalStateType = {
  loading: boolean;
  completed: boolean;
  amount: string;
  txHash: string | undefined;
  error: string | null;
};

export type DepositModalFunctions = {
  setAmount: (amount: string) => void;
  setTxHash: (txHash: string) => void;
  startLoading: () => void;
  stopLoading: () => void;
  setError: (error: string) => void;
  updateTransactionStatus: () => void;
};

export type DepositModalTypes = DepositModalStateType & DepositModalFunctions;
