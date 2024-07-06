"use client";

import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  styled,
  Container,
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import colors from "@/themes/colors";
import Avatar from "@/components/atoms/Avatar";
import { Pool } from "@/types/pool";
import useModalState from "@/hooks/context/useModalState";
import { ModalsKeys } from "@/context/modal/modal.types";
import PrimaryButton from "@/components/atoms/PrimaryButton";

const DetailContainer = styled(Container)(({ theme }) => ({
  background: colors.darkGradientBackground,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: `0 8px 20px rgba(0, 0, 0, 0.8)`,
  marginTop: theme.spacing(3),
}));

const Section = styled(Paper)(({ theme }) => ({
  backgroundColor: colors.lighterDarkGrey,
  padding: theme.spacing(1.5),
  margin: theme.spacing(2, 0),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
  textAlign: "center",
  position: "relative",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: theme.typography.h4.fontWeight,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(1),
  animation: "fadeIn 1s ease-in-out",
}));

const Label = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  animation: "fadeIn 1.2s ease-in-out",
}));

const Value = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  animation: "fadeIn 1.4s ease-in-out",
}));

interface PoolDetailsProps {
  poolData: Pool;
}

const PoolDetails: React.FC<PoolDetailsProps> = ({ poolData }) => {
  const { account } = useWeb3React();
  const { openModal } = useModalState();

  const onDeposit = () =>
    poolData && openModal({ name: ModalsKeys.DEPOSIT, poolData });

  const onWithdraw = () =>
    poolData && openModal({ name: ModalsKeys.WITHDRAW, poolData });

  return (
    <DetailContainer maxWidth="md">
      <Box sx={{ textAlign: "center" }}>
        <Avatar src={poolData.imageUrl} alt={poolData.name} />
        <Title mt={2}>{poolData.name}</Title>
      </Box>
      <Section elevation={3}>
        <Label>Amount Deposited:</Label>
        <Value>{poolData.amountDeposited}</Value>
      </Section>
      <Section elevation={3}>
        <Label>APY:</Label>
        <Value>{poolData.apy}</Value>
      </Section>
      <Section elevation={3}>
        <Label>Rewards:</Label>
        <Value>{poolData.rewards}</Value>
      </Section>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        {account ? (
          <Box>
            <PrimaryButton onClick={onDeposit} variant="contained">
              Stake
            </PrimaryButton>
            <PrimaryButton onClick={onWithdraw} variant="contained">
              Withdraw
            </PrimaryButton>
          </Box>
        ) : (
          <Typography
            component="h1"
            fontWeight="bold"
            sx={{ animation: "fadeIn 1.8s ease-in-out" }}
          >
            Connect your wallet to stake
          </Typography>
        )}
      </Box>
    </DetailContainer>
  );
};

export default PoolDetails;
