import {
  DepositModalActions,
  DepositModalStateType,
} from "./depositModal.types";

const depositModalReducer = (
  state: DepositModalStateType,
  action: DepositModalActions
): DepositModalStateType => {
  switch (action.type) {
    case "SET_AMOUNT":
      return {
        ...state,
        amount: action.payload,
      };
    case "SET_TX_HASH":
      return {
        ...state,
        txHash: action.payload,
      };
  }
};

export default depositModalReducer;
