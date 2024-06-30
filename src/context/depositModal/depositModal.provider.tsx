import React, { useReducer, ReactNode } from "react";
import DepositModalContext, { initialState } from "./depositModal.context";
import depositModalReducer from "./depositModal.reducer";

const DepositModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(depositModalReducer, initialState);

  return (
    <DepositModalContext.Provider value={{ state, dispatch }}>
      {children}
    </DepositModalContext.Provider>
  );
};

export default DepositModalProvider;
