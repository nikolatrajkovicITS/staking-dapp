import React from "react";
import {
  ConnectionType,
  getConnection,
  tryActivateConnector,
  tryDeactivateConnector,
} from "@/libs/connections";

const ConnectWallet = ({
  isEnabled,
  isConnected,
  connectionType,
  onActivate,
  onDeactivate,
}: {
  isEnabled: boolean;
  isConnected: boolean;
  connectionType: ConnectionType;
  onActivate: (connectionType: ConnectionType) => void;
  onDeactivate: () => void;
}) => {
  const onClick = async () => {
    if (isConnected) {
      const deactivation = await tryDeactivateConnector(
        getConnection(connectionType).connector
      );
      // undefined means the deactivation failed
      if (deactivation === undefined) {
        return;
      }
      onDeactivate();
      return;
    }

    const activation = await tryActivateConnector(
      getConnection(connectionType).connector
    );
    if (!activation) {
      return;
    }
    onActivate(activation);
  };

  return (
    <div>
      <button onClick={onClick} disabled={!isEnabled}>
        {isConnected ? "Disconnect" : "Connect"} {connectionType}
      </button>
    </div>
  );
};

export default ConnectWallet;
