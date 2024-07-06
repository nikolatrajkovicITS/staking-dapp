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
import PrimaryButton from "@/components/atoms/PrimaryButton";

interface ConnectWalletProps {
  isEnabled: boolean;
  isConnected: boolean;
  connectionType: ConnectionType;
  account?: string;
  onActivate: (connectionType: ConnectionType) => void;
  onDeactivate: () => void;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({
  isConnected,
  connectionType,
  account,
  onActivate,
  onDeactivate,
}) => {
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
        <PrimaryButton
          sx={{ padding: "0.7rem 1rem" }}
          onClick={handleWalletConnection}
          endIcon={<CloseIcon fontSize="large" />}
        >
          <Typography variant="body1" color="white">
            {userAddress}
          </Typography>
        </PrimaryButton>
      ) : (
        <MetamaskButton onClick={handleWalletConnection} />
      )}
    </Box>
  );
};

export default ConnectWallet;
