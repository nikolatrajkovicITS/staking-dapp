"use client";

import React from "react";
import { Box } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import Pools from "@/components/organisms/pools/Pools";

const Home: React.FC = () => {
  const { account } = useWeb3React();

  console.log("account", account);

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Pools />
    </Box>
  );
};

export default Home;
