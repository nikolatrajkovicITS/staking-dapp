import React from "react";
import { Grid } from "@mui/material";
import UserBalanceCard from "@/components/organisms/balance/UserBalanceCard";
import StakedBalanceCard from "@/components/organisms/balance/StakedBalanceCard";

interface AccountBalanceProps {
  account: string;
}

const AccountBalance: React.FC<AccountBalanceProps> = ({ account }) => (
  <Grid container spacing={3}>
    <Grid item xs={12} md={6}>
      <UserBalanceCard account={account} />
    </Grid>
    <Grid item xs={12} md={6}>
      <StakedBalanceCard />
    </Grid>
  </Grid>
);

export default AccountBalance;
