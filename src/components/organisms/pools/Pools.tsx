import React from "react";
import { Box, Grid } from "@mui/material";
import PoolCard from "@/components/organisms/pools/PoolCard";
import { useWeb3React } from "@web3-react/core";

const poolData = [
  {
    name: "Ethereum Growth Pool",
    amountDeposited: "1000 ETH",
    apy: "5%",
    rewards: "ETH",
    imageUrl: "/assets/images/eth-pool.jfif",
  },
  {
    name: "Bitcoin Staking Pool",
    amountDeposited: "2000 BTC",
    apy: "6%",
    rewards: "BTC",
    imageUrl: "/assets/images/btc-pool.jfif",
  },
  {
    name: "USDT Stability Pool",
    amountDeposited: "5000 USDT",
    apy: "4%",
    rewards: "USDT",
    imageUrl: "/assets/images/usdt-pool.jfif",
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
              imageUrl={pool.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pools;
