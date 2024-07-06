import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import PoolCard from "@/components/organisms/pools/PoolCard";
import { useWeb3React } from "@web3-react/core";
import { Pool } from "@/types/pool";
import usePoolsData from "@/hooks/usePoolsData";

const Pools: React.FC = () => {
  const { account } = useWeb3React();
  const { pools, isLoading, isError } = usePoolsData();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>Error loading pools.</Typography>;
  }

  return (
    <Box sx={{ flexGrow: 1, mt: account ? 5 : 0 }}>
      <Grid container spacing={3}>
        {pools?.map((pool: Pool) => (
          <Grid item xs={12} sm={6} md={4} key={pool.name}>
            <PoolCard poolData={pool} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pools;
