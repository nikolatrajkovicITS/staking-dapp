import { Pool } from "@/types/pool";
import useSWR from "swr";

const poolData: Pool[] = [
  {
    id: "1",
    name: "Ethereum Growth Pool",
    amountDeposited: "1000 ETH",
    apy: "5%",
    rewards: "ETH",
    imageUrl: "/assets/images/eth-pool.jfif",
  },
  {
    id: "2",
    name: "Bitcoin Staking Pool",
    amountDeposited: "2000 BTC",
    apy: "6%",
    rewards: "BTC",
    imageUrl: "/assets/images/btc-pool.jfif",
  },
  {
    id: "3",
    name: "USDT Stability Pool",
    amountDeposited: "5000 USDT",
    apy: "4%",
    rewards: "USDT",
    imageUrl: "/assets/images/usdt-pool.jfif",
  },
];

const fetcher = (id?: string): Promise<Pool[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (id) {
        const pool = poolData.find((pool) => pool.id === id);
        resolve(pool ? [pool] : []);
      } else {
        resolve(poolData);
      }
    }, 500);
  });
};

const usePoolsData = (id?: string) => {
  const { data, error } = useSWR<Pool[]>(
    () => (id ? `/api/pools/${id}` : "/api/pools"),
    () => fetcher(id)
  );

  return {
    pools: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default usePoolsData;
