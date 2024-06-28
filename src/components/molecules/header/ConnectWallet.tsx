import React from "react";
import {
  ConnectionType,
  getConnection,
  tryActivateConnector,
  tryDeactivateConnector,
} from "@/libs/connections";
import MetaMaskButton from "../MetaMaskButton";

const ConnectWallet: React.FC<{
  isEnabled: boolean;
  isConnected: boolean;
  connectionType: ConnectionType;
  account?: string;
  onActivate: (connectionType: ConnectionType) => void;
  onDeactivate: () => void;
}> = ({ isConnected, connectionType, account, onActivate, onDeactivate }) => {
  const onClick = async () => {
    if (isConnected) {
      const deactivation = await tryDeactivateConnector(
        getConnection(connectionType).connector
      );
      if (deactivation !== undefined) {
        onDeactivate();
      }
      return;
    }

    const activation = await tryActivateConnector(
      getConnection(connectionType).connector
    );
    if (activation) {
      onActivate(activation);
    }
  };

  return (
    <MetaMaskButton
      onClick={onClick}
      isConnected={isConnected}
      account={account}
    />
  );
};

export default ConnectWallet;
