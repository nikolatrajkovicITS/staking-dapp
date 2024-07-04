import React, { useMemo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  styled,
} from "@mui/material";
import { useStakedBalances } from "@/hooks/balance/useStakedBalances";
import calculateTotalStaked from "@/utils/calculateTotalStaked";
import colors from "@/themes/colors";

const DataField = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  marginBottom: theme.spacing(1),
}));

const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 600,
}));

const Value = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 700,
}));

const StakedCard = styled(Card)(({ theme }) => ({
  background: colors.darkGradientBackground,
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
  marginBottom: theme.spacing(2),
  minWidth: 275,
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.h5.fontWeight,
  color: theme.palette.common.white,
}));

const StakedBalanceCard: React.FC = () => {
  const { balances, isLoading, isError } = useStakedBalances();

  const totalStaked = useMemo(
    () => (balances?.pools ? calculateTotalStaked(balances.pools) : []),
    [balances]
  );

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>Error loading staked balances.</Typography>;
  }

  return (
    <StakedCard>
      <CardHeader
        title={<CardTitle>Staked Balance</CardTitle>}
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      />
      <CardContent>
        {balances?.pools.map((pool) =>
          pool.stakedBalances.map((balance) => (
            <DataField key={`${pool.poolId}-${balance.tokenSymbol}`}>
              <Label>{balance.tokenSymbol}:</Label>
              <Value>{balance.amount}</Value>
            </DataField>
          ))
        )}
        <DataField>
          <Label>Total in USD:</Label>
          <Value>{totalStaked}</Value>
        </DataField>
      </CardContent>
    </StakedCard>
  );
};

export default StakedBalanceCard;
