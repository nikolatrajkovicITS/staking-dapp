"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Box,
  styled,
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { ModalsKeys } from "@/context/modal/modal.types";
import useModalState from "@/hooks/context/useModalState";
import colors from "@/themes/colors";
import Avatar from "@/components/molecules/Avatar";
import { useRouter } from "next/navigation";
import { Pool } from "@/types/pool";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import CheckIcon from "@mui/icons-material/Check";

const CardStyled = styled(Card)(({ theme }) => ({
  background: colors.darkGradientBackground,
  color: theme.palette.text.primary,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
  borderRadius: "16px",
  cursor: "pointer",
  border: "1px solid transparent",
  "&:hover": {
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.h6.fontWeight,
  color: theme.palette.common.white,
  textAlign: "center",
  marginTop: theme.spacing(2),
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
  color: theme.palette.text.primary,
  fontWeight: 700,
}));

interface PoolCardProps {
  poolData?: Pool;
}

const PoolCard: React.FC<PoolCardProps> = ({ poolData }) => {
  const { id, name, amountDeposited, apy, rewards, imageUrl } = poolData || {};
  const { account } = useWeb3React();
  const { openModal } = useModalState();
  const router = useRouter();

  const handleOpenDeposit = () =>
    poolData && openModal({ name: ModalsKeys.DEPOSIT, poolData });

  const handleOpenWithdraw = () =>
    poolData && openModal({ name: ModalsKeys.WITHDRAW, poolData });

  const handleCardClick = () => {
    if (id) {
      router.push(`/pool/${id}`);
    }
  };

  return (
    <CardStyled sx={{ minWidth: 275 }} onClick={handleCardClick}>
      <CardHeader
        title={
          <Box sx={{ textAlign: "center" }}>
            <Avatar
              src={imageUrl || ""}
              alt={name || "Pool"}
              icon={<CheckIcon sx={{ color: "white", fontSize: 16 }} />}
            />
            <CardTitle>{name || "No Name"}</CardTitle>
          </Box>
        }
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      />
      <CardContent>
        <DataField>
          <Label>Amount Deposited:</Label>
          <Value>{amountDeposited || "N/A"}</Value>
        </DataField>
        <DataField>
          <Label>APY:</Label>
          <Value>{apy || "N/A"}</Value>
        </DataField>
        <DataField>
          <Label>Rewards:</Label>
          <Value>{rewards || "N/A"}</Value>
        </DataField>
      </CardContent>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Box sx={{ flexGrow: 1 }} />
        {account ? (
          <Box>
            <PrimaryButton
              onClick={(e) => {
                e.stopPropagation();
                handleOpenDeposit();
              }}
              variant="contained"
              sx={{ mr: 1 }}
            >
              Stake
            </PrimaryButton>
            <PrimaryButton
              onClick={(e) => {
                e.stopPropagation();
                handleOpenWithdraw();
              }}
              variant="contained"
            >
              Withdraw
            </PrimaryButton>
          </Box>
        ) : (
          <Typography component="h1" fontWeight="bold">
            Connect your wallet to stake
          </Typography>
        )}
      </CardActions>
    </CardStyled>
  );
};

export default PoolCard;
