import React from "react";
import { TextField } from "@mui/material";
import useWithdrawModalState from "@/hooks/context/useWithdrawModalState";

const WithdrawInput: React.FC = () => {
  const { setAmount, amount, error } = useWithdrawModalState();

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAmount(value);
  };

  return (
    <TextField
      fullWidth
      label="Amount to Withdraw"
      value={amount}
      onChange={handleAmountChange}
      variant="outlined"
      margin="normal"
      error={!!error}
      helperText={error || "Enter the amount to withdraw"}
    />
  );
};

export default WithdrawInput;
