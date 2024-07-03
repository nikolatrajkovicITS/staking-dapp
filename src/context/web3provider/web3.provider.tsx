"use client";

import React, { ReactNode, useEffect } from "react";
import { Web3ReactProvider, useWeb3React } from "@web3-react/core";
import { Connector } from "@web3-react/types";
import {
  ConnectionType,
  PRIORITIZED_CONNECTORS,
  getConnection,
} from "@/libs/connections";

const connectEagerly = async () => {
  await connect(getConnection(ConnectionType.INJECTED).connector);
};

async function connect(connector: Connector) {
  try {
    if (connector.connectEagerly) {
      await connector.connectEagerly();
    } else {
      await connector.activate();
    }
  } catch (error) {
    console.debug(`web3-react eager connection error: ${error}`);
  }
}

export const Web3Provider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const isWalletConnected = localStorage.getItem("isWalletConnected");
    if (isWalletConnected === "true") {
      connectEagerly();
    }
  }, []);

  return (
    <Web3ReactProvider
      connectors={Object.values(PRIORITIZED_CONNECTORS).map(
        ({ connector, hooks }) => [connector, hooks]
      )}
    >
      {children}
    </Web3ReactProvider>
  );
};
