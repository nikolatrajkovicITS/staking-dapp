import React from "react";
import { Box, Card, CardContent, Typography, styled } from "@mui/material";

const InfoBox = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  boxShadow: theme.shadows[2],
  marginBottom: theme.spacing(2),
}));

const InfoItem = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  color: theme.palette.text.primary,
}));

const DepositPoolInfo: React.FC<{ poolData: any }> = ({ poolData }) => {
  return (
    <Card>
      <CardContent>
        <InfoBox>
          <InfoItem variant="body1">
            <strong>Pool:</strong> {poolData?.name}
          </InfoItem>
          <InfoItem variant="body1">
            <strong>APY:</strong> {poolData?.apy}%
          </InfoItem>
          <InfoItem variant="body1">
            <strong>Deposit Limit:</strong> {poolData?.depositLimit} 24W
          </InfoItem>
          <InfoItem variant="body1">
            <strong>User Deposited:</strong> {poolData?.userDeposited} 24W
          </InfoItem>
        </InfoBox>
      </CardContent>
    </Card>
  );
};

export default DepositPoolInfo;
