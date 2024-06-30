export type DepositModalActions =
  | {
      type: "SET_AMOUNT";
      payload: string;
    }
  | {
      type: "SET_TX_HASH";
      payload: string;
    };

export type DepositModalStateType = {
  amount: string;
  txHash: string | undefined;
};

export type DepositModalFunctions = {
  setAmount: (amount: string) => void;
  setTxHash: (txHash: string) => void;
};

export type DepositModalTypes = DepositModalStateType & DepositModalFunctions;
