import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { Pool } from "@/types/pool";

const InfoBox = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: theme.shadows[2],
  marginBottom: theme.spacing(2),
  textAlign: "center",
}));

const InfoItem = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  color: theme.palette.text.primary,
}));

const WithdrawPoolInfo: React.FC<{ poolData: Pool }> = ({ poolData }) => {
  return (
    <InfoBox>
      <InfoItem variant="h6">Pool Information</InfoItem>
      <InfoItem variant="body1">
        <strong>Pool:</strong> {poolData?.name}
      </InfoItem>
      <InfoItem variant="body1">
        <strong>APY:</strong> {poolData?.apy}%
      </InfoItem>
      <InfoItem variant="body1">
        <strong>Total Liquidity:</strong> {poolData?.totalLiquidity} 24W
      </InfoItem>
      <InfoItem variant="body1">
        <strong>User Deposited:</strong> {poolData?.amountDeposited} 24W
      </InfoItem>
    </InfoBox>
  );
};

export default WithdrawPoolInfo;
