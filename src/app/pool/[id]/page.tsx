"use client";

import React, { useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Button,
  Paper,
  styled,
  Container,
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { ModalsKeys } from "@/context/modal/modal.types";
import useModalState from "@/hooks/context/useModalState";
import colors from "@/themes/colors";
import Avatar from "@/components/atoms/Avatar";
import usePoolsData from "@/hooks/usePoolsData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const DetailContainer = styled(Container)(({ theme }) => ({
  background: colors.darkGradientBackground,
  padding: theme.spacing(6),
  borderRadius: theme.shape.borderRadius,
  boxShadow: `0 8px 20px rgba(0, 0, 0, 0.8)`,
  marginTop: theme.spacing(5),
  color: theme.palette.common.white,
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)",
    zIndex: -1,
  },
  "&::after": {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "140%",
    height: "140%",
    background:
      "radial-gradient(circle, rgba(255,255,255,0.15), transparent 70%)",
    transform: "translate(-50%, -50%)",
    zIndex: -2,
    animation: "pulse 5s infinite",
  },
  "@keyframes pulse": {
    "0%": {
      transform: "translate(-50%, -50%) scale(1)",
      opacity: 1,
    },
    "50%": {
      transform: "translate(-50%, -50%) scale(1.05)",
      opacity: 0.8,
    },
    "100%": {
      transform: "translate(-50%, -50%) scale(1)",
      opacity: 1,
    },
  },
}));

const Section = styled(Paper)(({ theme }) => ({
  backgroundColor: colors.lighterDarkGrey,
  padding: theme.spacing(1.5),
  margin: theme.spacing(2, 0),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, rgba(0,0,0,0.1), transparent)",
    zIndex: -1,
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: theme.typography.h4.fontWeight,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(1),
  animation: "fadeIn 1s ease-in-out",
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
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

const ActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(1),
  animation: "fadeIn 1.6s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const PoolDetail: React.FC = () => {
  const router = useRouter();
  const { slug } = useParams();
  const poolId = slug as string;
  const { account } = useWeb3React();
  const { openModal } = useModalState();

  const { pools, isLoading, isError } = usePoolsData(poolId);
  const poolData = useMemo(() => pools?.[0], [pools]);

  const handleOpenDeposit = () =>
    poolData && openModal({ name: ModalsKeys.DEPOSIT, poolData });

  const handleOpenWithdraw = () =>
    poolData && openModal({ name: ModalsKeys.WITHDRAW, poolData });

  const handleBack = () => {
    router.push("/");
  };

  if (isLoading) {
    return (
      <DetailContainer>
        <Typography>Loading...</Typography>
      </DetailContainer>
    );
  }

  if (isError || !poolData) {
    return (
      <DetailContainer>
        <Typography>Error loading pool details.</Typography>
      </DetailContainer>
    );
  }

  return (
    <Box>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
        variant="contained"
        color="secondary"
        sx={{ animation: "fadeIn 0.8s ease-in-out" }}
      >
        Pools
      </Button>
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
              <ActionButton onClick={handleOpenDeposit} variant="contained">
                Stake
              </ActionButton>
              <ActionButton onClick={handleOpenWithdraw} variant="contained">
                Withdraw
              </ActionButton>
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
    </Box>
  );
};

export default PoolDetail;
