import {
  DepositModalActions,
  DepositModalStateType,
  DepositModalActionTypes,
} from "./depositModal.types";

const depositModalReducer = (
  state: DepositModalStateType,
  action: DepositModalActions
): DepositModalStateType => {
  switch (action.type) {
    case DepositModalActionTypes.SET_AMOUNT:
      return {
        ...state,
        amount: action.amount,
      };
    case DepositModalActionTypes.COMPLETE_TRANSACTION:
      return {
        ...state,
        txHash: action.txHash,
        completed: true,
        loading: false,
      };
    case DepositModalActionTypes.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DepositModalActionTypes.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case DepositModalActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default depositModalReducer;
