import React from "react";
import { Box, Grid } from "@mui/material";
import PoolCard from "@/components/organisms/pools/PoolCard";
import { useWeb3React } from "@web3-react/core";

const poolData = [
  {
    name: "Pool 1",
    amountDeposited: "1000 ETH",
    apy: "5%",
    rewards: "ETH",
  },
  {
    name: "Pool 2",
    amountDeposited: "2000 BTC",
    apy: "6%",
    rewards: "BTC",
  },
  {
    name: "Pool 3",
    amountDeposited: "5000 USDT",
    apy: "4%",
    rewards: "USDT",
  },
];

const Pools: React.FC = () => {
  const { account } = useWeb3React();

  return (
    <Box sx={{ flexGrow: 1, mt: account ? 5 : 0 }}>
      <Grid container spacing={3}>
        {poolData.map((pool) => (
          <Grid item xs={12} sm={6} md={4} key={pool.name}>
            <PoolCard
              name={pool.name}
              amountDeposited={pool.amountDeposited}
              apy={pool.apy}
              rewards={pool.rewards}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pools;
