import React, { useMemo } from "react";
import { CardContent, CardHeader, Typography } from "@mui/material";
import { useStakedBalances } from "@/hooks/balance/useStakedBalances";
import calculateTotalStaked from "@/utils/calculateTotalStaked";
import DataField from "@/components/atoms/DataField";
import BalanceOverviewCard from "@/components/atoms/BalanceOverviewCard";

const StakedBalanceCard: React.FC = () => {
  const { balances, isLoading, isError } = useStakedBalances();

  const totalStaked = useMemo(
    () => (balances?.pools ? calculateTotalStaked(balances.pools) : []),
    [balances]
  );

  if (isLoading) {
    return (
      <BalanceOverviewCard>
        <CardHeader
          title={<Typography variant="h5">Loading...</Typography>}
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
            <Typography variant="h5">Error loading staked balances</Typography>
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
            Staked Balance
          </Typography>
        }
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      />
      <CardContent>
        {balances?.pools.map((pool) =>
          pool.stakedBalances.map((balance) => (
            <DataField key={`${pool.poolId}-${balance.tokenSymbol}`}>
              <Typography color="text.secondary" fontWeight={600}>
                {balance.tokenSymbol}:
              </Typography>
              <Typography color="white" fontWeight={700}>
                {balance.amount || ""}
              </Typography>
            </DataField>
          ))
        )}
        <DataField>
          <Typography color="text.secondary" fontWeight={600}>
            Total in USD:
          </Typography>
          <Typography color="white" fontWeight={700}>
            {totalStaked || ""}
          </Typography>
        </DataField>
      </CardContent>
    </BalanceOverviewCard>
  );
};

export default StakedBalanceCard;
