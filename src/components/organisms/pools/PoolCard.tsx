import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Button,
  Box,
  styled,
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { ModalsKeys } from "@/context/modal/modal.types";
import useModalState from "@/hooks/context/useModalState";

interface PoolCardProps {
  name: string;
  amountDeposited: string;
  apy: string;
  rewards: string;
}

const CardStyled = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.default} 30%, ${theme.palette.background.paper} 100%)`,
  color: theme.palette.text.primary,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
  overflow: "hidden",
  borderRadius: "16px",
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.h5.fontWeight,
  color: theme.palette.common.white,
}));

const StakeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
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

const PoolCard: React.FC<PoolCardProps> = ({
  name,
  amountDeposited,
  apy,
  rewards,
}) => {
  const { account } = useWeb3React();
  const { openModal } = useModalState();

  const poolData = {
    name: "Sample Pool",
    totalDeposited: 1000,
  };

  const handleOpenDeposit = () =>
    openModal({ name: ModalsKeys.DEPOSIT, poolData: poolData });

  const handleOpenWithdraw = () =>
    openModal({ name: ModalsKeys.WITHDRAW, poolData: poolData });

  return (
    <CardStyled sx={{ minWidth: 275 }}>
      <CardHeader
        title={<CardTitle>{name}</CardTitle>}
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      />
      <CardContent>
        <DataField>
          <Label>Amount Deposited:</Label>
          <Value>{amountDeposited}</Value>
        </DataField>
        <DataField>
          <Label>APY:</Label>
          <Value>{apy}</Value>
        </DataField>
        <DataField>
          <Label>Rewards:</Label>
          <Value>{rewards}</Value>
        </DataField>
      </CardContent>
      <CardActions>
        <Box sx={{ flexGrow: 1 }} />
        {account ? (
          <Box>
            <StakeButton
              onClick={handleOpenDeposit}
              variant="contained"
              sx={{ mr: 1 }}
            >
              Stake
            </StakeButton>
            <StakeButton onClick={handleOpenWithdraw} variant="contained">
              Withdraw
            </StakeButton>
          </Box>
        ) : (
          <Typography color="white" component="h1">
            Connect your wallet to stake
          </Typography>
        )}
      </CardActions>
    </CardStyled>
  );
};

export default PoolCard;
