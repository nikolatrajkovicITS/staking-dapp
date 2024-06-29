"use client";

import React from "react";
import { Box } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import Pools from "@/components/organisms/pools/Pools";
import UserBalance from "@/components/organisms/balance/UserBalance";
import TransactionHistory from "@/components/organisms/TransactionHistory";

const Home: React.FC = () => {
  const { account } = useWeb3React();

  return (
    <Box>
      {account && <UserBalance account={account || ""} />}

      <Pools />

      <TransactionHistory />
    </Box>
  );
};

export default Home;
