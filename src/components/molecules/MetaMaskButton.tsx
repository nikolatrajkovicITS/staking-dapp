import React from "react";
import { Button, Box, styled, Typography } from "@mui/material";
import MetamaskIcon from "@/assets/icons/MetamaskIcon";
import CloseIcon from "@mui/icons-material/Close";

const MetaMaskStyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#F6851B",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#E2761B",
  },
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  textTransform: "none",
}));

const DisconnectButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#F6851B",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#E2761B",
  },
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  textTransform: "none",
  marginLeft: theme.spacing(1),
  minWidth: 0,
}));

const truncateAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const MetaMaskButton: React.FC<{
  onClick: () => void;
  isConnected: boolean;
  account?: string;
}> = ({ onClick, isConnected, account }) => {
  return (
    <Box display="flex" alignItems="center">
      {isConnected ? (
        <DisconnectButton
          onClick={onClick}
          endIcon={<CloseIcon fontSize="large" />}
        >
          <Typography variant="body1" sx={{ mr: 1, color: "#fff" }}>
            {account ? truncateAddress(account) : ""}
          </Typography>
        </DisconnectButton>
      ) : (
        <MetaMaskStyledButton onClick={onClick}>
          <MetamaskIcon />
        </MetaMaskStyledButton>
      )}
    </Box>
  );
};

export default MetaMaskButton;
