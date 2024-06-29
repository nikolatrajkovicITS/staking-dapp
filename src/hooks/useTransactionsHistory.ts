import useSWR from "swr";

interface Transaction {
  id: string;
  poolName: string;
  poolAddress: string;
  amount: string;
  currency: string;
  transactionType: "Deposit" | "Withdraw";
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    poolName: "BTC Pool",
    poolAddress: "0x123...abc",
    amount: "0.5",
    currency: "BTC",
    transactionType: "Deposit",
  },
  {
    id: "2",
    poolName: "ETH Pool",
    poolAddress: "0x456...def",
    amount: "1.2",
    currency: "ETH",
    transactionType: "Withdraw",
  },
  {
    id: "3",
    poolName: "Stablecoin Pool",
    poolAddress: "0x789...ghi",
    amount: "1000",
    currency: "USDC",
    transactionType: "Deposit",
  },
];

const fetcher = (url: string) =>
  new Promise<Transaction[]>((resolve) => {
    setTimeout(() => resolve(mockTransactions), 1000);
  });

const useTransactionsHistory = () => {
  const { data, error } = useSWR<Transaction[]>("/api/transactions", fetcher);

  return {
    transactions: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export default useTransactionsHistory;
