import { UserBalances } from "@/types/balance";
import useSWR from "swr";

const mockBalances: UserBalances = {
  btc: "0.5",
  eth: "1.2",
  usdc: "1000",
};
const fetcher = (url: string) => mockBalances;

const useUserBalance = (account: string) => {
  const { data, error } = useSWR<UserBalances>(
    `/api/balances?account=${account}`,
    fetcher,
    {
      fallbackData: mockBalances,
    }
  );

  return {
    balances: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export default useUserBalance;
