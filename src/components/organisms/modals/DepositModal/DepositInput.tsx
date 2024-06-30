import React from "react";
import { TextField } from "@mui/material";
import useDepositModalState from "@/hooks/context/useDepositModalState";

const DepositInput: React.FC = () => {
  const { setAmount, error, amount } = useDepositModalState();

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAmount(value);
  };

  return (
    <TextField
      fullWidth
      label="Amount to Deposit"
      value={amount}
      onChange={handleAmountChange}
      variant="outlined"
      margin="normal"
      error={!!error}
      helperText={error || "Enter the amount to deposit"}
    />
  );
};

export default DepositInput;
