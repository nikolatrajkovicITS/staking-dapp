import React from "react";
import { Box, Typography } from "@mui/material";

const Home: React.FC = () => {
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
