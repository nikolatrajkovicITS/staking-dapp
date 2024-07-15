import React from "react";
import { CardContent, CardHeader, Typography } from "@mui/material";
import useUserBalance from "@/hooks/balance/useUserBalance";
import DataField from "@/components/atoms/DataField";
import BalanceOverviewCard from "@/components/atoms/BalanceOverviewCard";

interface UserBalanceProps {
  account: string;
}

const UserBalanceCard: React.FC<UserBalanceProps> = ({ account }) => {
  const { balances, isLoading, isError } = useUserBalance(account);

  if (isLoading) {
    return (
      <BalanceOverviewCard>
        <CardHeader
          title={
            <Typography variant="h5" color="white" mt={2}>
              Loading...
            </Typography>
          }
          sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        />
      </BalanceOverviewCard>
    );
  }

  if (isError) {
    return (
      <BalanceOverviewCard>
        <CardHeader
          title={
            <Typography variant="h5" color="white" mt={2}>
              Error loading balances
            </Typography>
          }
          sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        />
      </BalanceOverviewCard>
    );
  }

  return (
    <BalanceOverviewCard>
      <CardHeader
        title={
          <Typography variant="h5" color="white" mt={2}>
            Account Balance
          </Typography>
        }
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      />
      <CardContent>
        <DataField>
          <Typography color="text.secondary" fontWeight={600}>
            Account Address:
          </Typography>
          <Typography color="white" fontWeight={700}>
            {account}
          </Typography>
        </DataField>
        <DataField>
          <Typography color="text.secondary" fontWeight={600}>
            BTC:
          </Typography>
          <Typography color="white" fontWeight={700}>
            {balances?.btc}
          </Typography>
        </DataField>
        <DataField>
          <Typography color="text.secondary" fontWeight={600}>
            ETH:
          </Typography>
          <Typography color="white" fontWeight={700}>
            {balances?.eth}
          </Typography>
        </DataField>
        <DataField>
          <Typography color="text.secondary" fontWeight={600}>
            USDC:
          </Typography>
          <Typography color="white" fontWeight={700}>
            {balances?.usdc}
          </Typography>
        </DataField>
      </CardContent>
    </BalanceOverviewCard>
  );
};

export default UserBalanceCard;
