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
import colors from "@/themes/colors";
import Avatar from "@/components/atoms/Avatar";

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

const ActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
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

interface PoolCardProps {
  name: string;
  amountDeposited: string;
  apy: string;
  rewards: string;
  imageUrl: string;
}

const PoolCard: React.FC<PoolCardProps> = ({
  name,
  amountDeposited,
  apy,
  rewards,
  imageUrl,
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
        title={
          <Box sx={{ textAlign: "center" }}>
            <Avatar src={imageUrl} alt={name} />
            <CardTitle>{name}</CardTitle>
          </Box>
        }
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
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Box sx={{ flexGrow: 1 }} />
        {account ? (
          <Box>
            <ActionButton
              onClick={handleOpenDeposit}
              variant="contained"
              sx={{ mr: 1 }}
            >
              Stake
            </ActionButton>
            <ActionButton onClick={handleOpenWithdraw} variant="contained">
              Withdraw
            </ActionButton>
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
