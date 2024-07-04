import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  styled,
} from "@mui/material";
import useUserBalance from "@/hooks/balance/useUserBalance";
import colors from "@/themes/colors";

const BalanceCard = styled(Card)(({ theme }) => ({
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

const UserBalanceCard: React.FC<UserBalanceProps> = ({ account }) => {
  const { balances, isLoading, isError } = useUserBalance(account);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (isError) {
    return <Typography>Error loading balances.</Typography>;
  }

  return (
    <BalanceCard>
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
          <Label>BTC:</Label>
          <Value>{balances?.btc}</Value>
        </DataField>
        <DataField>
          <Label>ETH:</Label>
          <Value>{balances?.eth}</Value>
        </DataField>
        <DataField>
          <Label>USDC:</Label>
          <Value>{balances?.usdc}</Value>
        </DataField>
      </CardContent>
    </BalanceCard>
  );
};

export default UserBalanceCard;
