"use client";

import { AppBar, Toolbar, Typography, alpha } from "@mui/material";
import { useState } from "react";
import ConnectWallet from "./ConnectWallet";
import { ConnectionType } from "@/libs/connections";
import { useWeb3React } from "@web3-react/core";

const Header: React.FC = () => {
  const [activeConnectionType, setActiveConnectionType] =
    useState<ConnectionType | null>(null);
  const [isConnectionActive, setIsConnectionActive] = useState(false);
  const { account } = useWeb3React();

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
    <AppBar
      position="static"
      color="primary"
      sx={(theme) => ({
        background: alpha(theme.palette.background.paper, 0.04),
      })}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Staking DApp
        </Typography>
        <ConnectWallet
          account={account}
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
