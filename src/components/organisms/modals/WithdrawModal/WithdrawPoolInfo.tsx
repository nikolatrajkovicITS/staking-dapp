import React from "react";
import { Box, Typography, styled, Avatar } from "@mui/material";
import { Pool } from "@/types/pool";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PersonIcon from "@mui/icons-material/Person";

const CardStyled = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  marginBottom: theme.spacing(2),
}));

const Header = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const PoolName = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.h5.fontWeight,
  color: theme.palette.common.white,
}));

const InfoBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.default} 30%, ${theme.palette.background.paper} 100%)`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  boxShadow: theme.shadows[3],
}));

const InfoItem = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  color: theme.palette.text.primary,
  display: "flex",
  alignItems: "center",
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
    <CardStyled>
      <Header>
        <PoolName>{poolData?.name || "No Name"}</PoolName>
        <Avatar src={poolData?.imageUrl || ""} alt={poolData?.name || "Pool"} />
      </Header>
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
            <strong>Total Liquidity:</strong>{" "}
            {poolData?.totalLiquidity || "N/A"} 24W
          </InfoText>
        </InfoItem>
        <InfoItem>
          <PersonIcon />
          <InfoText variant="body1">
            <strong>User Deposited:</strong>{" "}
            {poolData?.amountDeposited || "N/A"} 24W
          </InfoText>
        </InfoItem>
      </InfoBox>
    </CardStyled>
  );
};

export default WithdrawPoolInfo;
