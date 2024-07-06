import React from "react";
import { TextField, styled } from "@mui/material";
import useDepositModalState from "@/hooks/context/useDepositModalState";

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.text.primary,

  "& .MuiInputBase-root": {
    color: theme.palette.text.primary,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.divider,
      border: `1px solid ${theme.palette.primary.dark}`,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
  "& .MuiFormHelperText-root": {
    color: theme.palette.text.secondary,
  },
}));

const DepositInput: React.FC = () => {
  const { setAmount, error, amount } = useDepositModalState();

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAmount(value);
  };

  return (
    <TextFieldStyled
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
