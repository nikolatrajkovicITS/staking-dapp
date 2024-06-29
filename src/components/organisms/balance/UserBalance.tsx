import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  styled,
} from "@mui/material";
import StakedBalance from "./StakedBalance";
import useUserBalance from "@/hooks/balance/useUserBalance";

const BalanceCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 100%)`,
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
  overflow: "hidden",
  marginBottom: theme.spacing(2),
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.h5.fontWeight,
  color: theme.palette.common.white,
}));

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

interface UserBalanceProps {
  account: string;
}

const UserBalance: React.FC<UserBalanceProps> = ({ account }) => {
  const { balances, isLoading, isError } = useUserBalance(account);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>Error loading balances.</Typography>;
  }

  return (
    <BalanceCard sx={{ minWidth: 275 }}>
      <CardHeader
        title={<CardTitle>Account Balance</CardTitle>}
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      />
      <CardContent>
        <DataField>
          <Label>Account Address:</Label>
          <Value>{account}</Value>
        </DataField>
        <DataField>
          <Label>BTC Balance:</Label>
          <Value>{balances?.btc}</Value>
        </DataField>
        <DataField>
          <Label>ETH Balance:</Label>
          <Value>{balances?.eth}</Value>
        </DataField>
        <DataField>
          <Label>USDC Balance:</Label>
          <Value>{balances?.usdc}</Value>
        </DataField>

        <StakedBalance />
      </CardContent>
    </BalanceCard>
  );
};

export default UserBalance;
