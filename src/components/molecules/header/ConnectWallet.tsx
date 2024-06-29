import React, { useMemo } from "react";
import { Button, Box, styled, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  ConnectionType,
  getConnection,
  tryActivateConnector,
  tryDeactivateConnector,
} from "@/libs/connections";
import MetamaskButton from "@/components/atoms/MetamaskButton";
import { truncateAddress } from "@/utils";

const DisconnectButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.text.primary,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  textTransform: theme.typography.button.textTransform,
  fontWeight: theme.typography.button.fontWeight,
  marginLeft: theme.spacing(1),
  minWidth: 0,
}));

const ConnectWallet: React.FC<{
  isEnabled: boolean;
  isConnected: boolean;
  connectionType: ConnectionType;
  account?: string;
  onActivate: (connectionType: ConnectionType) => void;
  onDeactivate: () => void;
}> = ({ isConnected, connectionType, account, onActivate, onDeactivate }) => {
  const userAddress = useMemo(
    () => (account ? truncateAddress(account) : ""),
    [account]
  );

  const connectWallet = async () => {
    const activation = await tryActivateConnector(
      getConnection(connectionType).connector
    );
    if (activation) {
      onActivate(activation);
    }
  };

  const disconnectWallet = async () => {
    const deactivation = await tryDeactivateConnector(
      getConnection(connectionType).connector
    );
    if (deactivation !== undefined) {
      onDeactivate();
    }
  };

  const handleWalletConnection = async () => {
    if (isConnected) {
      await disconnectWallet();
    } else {
      await connectWallet();
    }
  };

  return (
    <Box display="flex" alignItems="center">
      {isConnected ? (
        <DisconnectButton
          onClick={handleWalletConnection}
          endIcon={<CloseIcon fontSize="large" />}
        >
          <Typography variant="body1">{userAddress}</Typography>
        </DisconnectButton>
      ) : (
        <MetamaskButton onClick={handleWalletConnection} />
      )}
    </Box>
  );
};

export default ConnectWallet;
