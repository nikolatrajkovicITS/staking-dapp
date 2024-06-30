import { createContext } from "react";
import {
  DepositModalStateType,
  DepositModalActions,
} from "./depositModal.types";

export const initialState: DepositModalStateType = {
  loading: false,
  completed: false,
  amount: "",
  txHash: undefined,
  error: null,
};

const DepositModalContext = createContext<{
  state: DepositModalStateType;
  dispatch: React.Dispatch<DepositModalActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export default DepositModalContext;
