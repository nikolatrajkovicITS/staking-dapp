import React, { useReducer, ReactNode } from "react";
import WithdrawModalContext, { initialState } from "./withdrawModal.context";
import withdrawModalReducer from "./withdrawModal.reducer";

const WithdrawModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(withdrawModalReducer, initialState);

  return (
    <WithdrawModalContext.Provider value={{ state, dispatch }}>
      {children}
    </WithdrawModalContext.Provider>
  );
};

export default WithdrawModalProvider;
