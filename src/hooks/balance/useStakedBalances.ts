import { StakedBalances } from "@/types/balance";
import useSWR from "swr";

const fetcher = async (): Promise<StakedBalances> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        pools: [
          {
            poolId: "1",
            poolName: "BTC Pool",
            stakedBalances: [
              {
                tokenSymbol: "BTC",
                amount: "0.5",
              },
            ],
          },
          {
            poolId: "2",
            poolName: "ETH Pool",
            stakedBalances: [
              {
                tokenSymbol: "ETH",
                amount: "1.2",
              },
            ],
          },
          {
            poolId: "3",
            poolName: "Stablecoin Pool",
            stakedBalances: [
              {
                tokenSymbol: "USDC",
                amount: "1000",
              },
            ],
          },
        ],
      });
    }, 1000);
  });
};

export const useStakedBalances = () => {
  const { data, error } = useSWR<StakedBalances>(
    "/api/stakedBalances",
    fetcher
  );

  return {
    balances: data,
    isLoading: !error && !data,
    isError: error,
  };
};
