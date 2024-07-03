"use client";

import { AppBar, Box, Toolbar, alpha } from "@mui/material";
import { useState } from "react";
import ConnectWallet from "./ConnectWallet";
import { ConnectionType } from "@/libs/connections";
import { useWeb3React } from "@web3-react/core";
import Logo from "@/assets/logo/Logo";

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
        p: 1,
        background: alpha(theme.palette.background.paper, 0.04),
      })}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Logo />
        </Box>

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
