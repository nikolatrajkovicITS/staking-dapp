import React, { useMemo } from "react";
import { Box, Typography, styled } from "@mui/material";
import { useStakedBalances } from "@/hooks/balance/useStakedBalances";
import calculateTotalStaked from "@/utils/calculateTotalStaked";

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

const StakedBalance: React.FC = () => {
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
    <Box
      sx={{
        background: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.text.primary,
        padding: 2,
        borderRadius: 1,
        marginTop: 2,
      }}
    >
      <Typography variant="h6">Staked Balance</Typography>
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
    </Box>
  );
};

export default StakedBalance;
