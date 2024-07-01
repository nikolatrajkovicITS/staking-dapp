import { createContext } from "react";
import {
  WithdrawModalStateType,
  WithdrawModalActions,
} from "./withdrawModal.types";

export const initialState: WithdrawModalStateType = {
  loading: false,
  completed: false,
  amount: "",
  txHash: undefined,
  error: null,
};

const WithdrawModalContext = createContext<{
  state: WithdrawModalStateType;
  dispatch: React.Dispatch<WithdrawModalActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export default WithdrawModalContext;
