"use client";

import React from "react";
import { Box } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import Pools from "@/components/organisms/pools/Pools";
import UserBalance from "@/components/organisms/balance/UserBalance";

const Home: React.FC = () => {
  const { account } = useWeb3React();

  return (
    <Box sx={{ mt: 5 }}>
      {account && <UserBalance account={account || ""} />}

      <Pools />
    </Box>
  );
};

export default Home;
