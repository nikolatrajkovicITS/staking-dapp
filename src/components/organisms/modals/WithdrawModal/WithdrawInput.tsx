import React from "react";
import useWithdrawModalState from "@/hooks/context/useWithdrawModalState";
import AmountInput from "@/components/atoms/AmountInput";

const WithdrawInput: React.FC = () => {
  const { setAmount, amount, error } = useWithdrawModalState();

  return (
    <AmountInput
      label="Amount to Withdraw"
      amount={amount}
      error={error}
      onAmountChange={setAmount}
      helperText="Enter the amount to withdraw"
    />
  );
};

export default WithdrawInput;
