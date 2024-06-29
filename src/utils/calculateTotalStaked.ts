import { Pool } from "@/types/balance";

// TODO: Reimplement this
const calculateTotalStaked = (pools: Pool[]) => {
  return pools
    .reduce((total, pool) => {
      const poolTotal = pool.stakedBalances.reduce((sum, balance) => {
        return sum + parseFloat(balance.amount);
      }, 0);
      return total + poolTotal;
    }, 0)
    .toFixed(2);
};

export default calculateTotalStaked;
