"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";

const Home: React.FC = () => {
  const { account } = useWeb3React();

  console.log("account", account);

  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h2" gutterBottom>
        Welcome to the Staking DApp
      </Typography>
      <Typography variant="h5">
        Securely stake your assets and earn rewards.
      </Typography>
    </Box>
  );
};

export default Home;
