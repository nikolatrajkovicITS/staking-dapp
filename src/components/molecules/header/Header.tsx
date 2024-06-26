"use client";

import { AppBar, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import ConnectWallet from "./ConnectWallet";
import { ConnectionType } from "@/libs/connections";

const Header: React.FC = () => {
  const [activeConnectionType, setActiveConnectionType] =
    useState<ConnectionType | null>(null);
  const [isConnectionActive, setIsConnectionActive] = useState(false);

  const handleActivate = (connectionType: ConnectionType) => {
    setActiveConnectionType(connectionType);
    setIsConnectionActive(true);
  };

  const handleDeactivate = () => {
    setActiveConnectionType(null);
    setIsConnectionActive(false);
  };

  const isNoOptionActive =
    !isConnectionActive ||
    (isConnectionActive && activeConnectionType === null);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Staking DApp
        </Typography>
        <ConnectWallet
          isEnabled={
            isNoOptionActive || activeConnectionType === ConnectionType.INJECTED
          }
          isConnected={activeConnectionType === ConnectionType.INJECTED}
          connectionType={ConnectionType.INJECTED}
          onActivate={handleActivate}
          onDeactivate={handleDeactivate}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
