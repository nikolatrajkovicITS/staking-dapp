"use client";

import React, { ReactNode, useEffect } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Connector } from "@web3-react/types";
import {
  ConnectionType,
  PRIORITIZED_CONNECTORS,
  getConnection,
} from "@/libs/connections";

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

const connectEagerly = async () => {
  await connect(getConnection(ConnectionType.NETWORK).connector);
};

export const Web3Provider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    connectEagerly();
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
