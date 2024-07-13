import React from "react";
import { TextField, styled } from "@mui/material";

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.text.primary,
  "& .MuiInputBase-root": {
    color: theme.palette.text.primary,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
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

interface AmountInputProps {
  label: string;
  amount: string;
  error: string | null;
  onAmountChange: (value: string) => void;
  helperText: string;
}

const AmountInput: React.FC<AmountInputProps> = ({
  label,
  amount,
  error,
  onAmountChange,
  helperText,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onAmountChange(value);
  };

  return (
    <TextFieldStyled
      fullWidth
      label={label}
      value={amount}
      onChange={handleChange}
      variant="outlined"
      margin="normal"
      error={!!error}
      helperText={error || helperText}
    />
  );
};

export default AmountInput;
