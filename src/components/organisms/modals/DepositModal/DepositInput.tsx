import React from "react";
import useDepositModalState from "@/hooks/context/useDepositModalState";
import AmountInput from "@/components/atoms/AmountInput";

const DepositInput: React.FC = () => {
  const { setAmount, error, amount } = useDepositModalState();

  return (
    <AmountInput
      label="Amount to Deposit"
      amount={amount}
      error={error}
      onAmountChange={setAmount}
      helperText="Enter the amount to deposit"
    />
  );
};

export default DepositInput;
