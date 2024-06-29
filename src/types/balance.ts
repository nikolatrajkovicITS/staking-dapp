export interface StakedBalance {
  tokenSymbol: string;
  amount: string;
}

export interface Pool {
  poolId: string;
  poolName: string;
  stakedBalances: StakedBalance[];
}

export interface StakedBalances {
  pools: Pool[];
}

export interface UserBalances {
  btc: string;
  eth: string;
  usdc: string;
}
