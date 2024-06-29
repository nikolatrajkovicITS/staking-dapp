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

interface PoolCardProps {
  name: string;
  amountDeposited: string;
  apy: string;
  rewards: string;
  onStake: () => void;
}

const GradientCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(135deg, #2c3e50 30%, #4ca1af 100%)",
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
  overflow: "hidden",
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
  onStake,
}) => {
  return (
    <GradientCard sx={{ minWidth: 275, m: 2 }}>
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
        <StakeButton onClick={onStake} variant="contained">
          Stake
        </StakeButton>
      </CardActions>
    </GradientCard>
  );
};

export default PoolCard;
