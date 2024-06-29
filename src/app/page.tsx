"use client";

import React from "react";
import { Box, Grid } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import Pools from "@/components/organisms/pools/Pools";
import TransactionHistory from "@/components/organisms/TransactionHistory";
import AccountBalance from "@/components/organisms/balance/AccountBalance";

const Home: React.FC = () => {
  const { account } = useWeb3React();

  return (
    <Box>
      {account && <AccountBalance account={account} />}

      <Pools />

      {account && <TransactionHistory />}
    </Box>
  );
};

export default Home;
