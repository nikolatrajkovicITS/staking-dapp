import React from "react";
import { Box, Typography, styled, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const BoxStyled = styled(Box)(({ theme }) => ({
  textAlign: "center",
  minHeight: "200px",
  color: theme.palette.text.primary,
  padding: theme.spacing(3),
  background: `linear-gradient(135deg, ${theme.palette.background.default} 30%, ${theme.palette.background.paper} 100%)`,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const SuccessIcon = styled(CheckCircleIcon)(({ theme }) => ({
  fontSize: "3rem",
  color: theme.palette.success.main,
  marginBottom: theme.spacing(1),
}));

const DepositCompleted: React.FC<{ txHash: string }> = ({ txHash }) => {
  const transactionLink = `https://sepolia.etherscan.io/tx/${txHash}`;

  return (
    <BoxStyled>
      <SuccessIcon />
      <Typography variant="h6">Deposit Completed!</Typography>
      <Typography variant="body2" mb={2}>
        Transaction Hash: {txHash}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href={transactionLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Transaction
      </Button>
    </BoxStyled>
  );
};

export default DepositCompleted;
