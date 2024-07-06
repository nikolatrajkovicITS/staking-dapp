import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { Pool } from "@/types/pool";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PersonIcon from "@mui/icons-material/Person";

const InfoBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.default} 30%, ${theme.palette.background.paper} 100%)`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  boxShadow: theme.shadows[3],
  marginBottom: theme.spacing(2),
}));

const InfoItem = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  color: theme.palette.text.primary,
  display: "flex",
  "& svg": {
    marginRight: theme.spacing(1),
  },
}));

const InfoText = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  color: theme.palette.text.primary,
}));

const WithdrawPoolInfo: React.FC<{ poolData: Pool }> = ({ poolData }) => {
  return (
    <InfoBox>
      <InfoItem>
        <AttachMoneyIcon />
        <InfoText variant="body1">
          <strong>Pool:</strong> {poolData?.name || "N/A"}
        </InfoText>
      </InfoItem>
      <InfoItem>
        <TrendingUpIcon />
        <InfoText variant="body1">
          <strong>APY:</strong> {poolData?.apy || "N/A"}
        </InfoText>
      </InfoItem>
      <InfoItem>
        <AccountBalanceIcon />
        <InfoText variant="body1">
          <strong>Total Liquidity:</strong> {poolData?.totalLiquidity || "N/A"}{" "}
          24W
        </InfoText>
      </InfoItem>
      <InfoItem>
        <PersonIcon />
        <InfoText variant="body1">
          <strong>User Deposited:</strong> {poolData?.amountDeposited || "N/A"}{" "}
          24W
        </InfoText>
      </InfoItem>
    </InfoBox>
  );
};

export default WithdrawPoolInfo;
