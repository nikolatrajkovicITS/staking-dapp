import {
  WithdrawModalActions,
  WithdrawModalStateType,
  WithdrawModalActionTypes,
} from "./withdrawModal.types";

const withdrawModalReducer = (
  state: WithdrawModalStateType,
  action: WithdrawModalActions
): WithdrawModalStateType => {
  switch (action.type) {
    case WithdrawModalActionTypes.SET_AMOUNT:
      return {
        ...state,
        amount: action.amount,
      };
    case WithdrawModalActionTypes.COMPLETE_TRANSACTION:
      return {
        ...state,
        txHash: action.txHash,
        completed: true,
        loading: false,
      };
    case WithdrawModalActionTypes.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case WithdrawModalActionTypes.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case WithdrawModalActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default withdrawModalReducer;
