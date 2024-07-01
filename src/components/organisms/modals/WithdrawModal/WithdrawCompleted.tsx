import React from "react";
import { Box, Typography, Button } from "@mui/material";

const WithdrawCompleted: React.FC<{ txHash: string }> = ({ txHash }) => {
  const transactionLink = `https://sepolia.etherscan.io/tx/${txHash}`;

  return (
    <Box textAlign="center" minHeight="200px">
      <Typography variant="h6">Withdrawal Completed!</Typography>
      <Typography variant="body2">Transaction Hash: {txHash}</Typography>
      <Button
        variant="contained"
        color="primary"
        href={transactionLink}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ marginTop: 2 }}
      >
        View Transaction
      </Button>
    </Box>
  );
};

export default WithdrawCompleted;
