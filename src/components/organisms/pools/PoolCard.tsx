"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  styled,
  CardActions,
} from "@mui/material";

import colors from "@/themes/colors";
import Avatar from "@/components/molecules/Avatar";
import { useRouter } from "next/navigation";
import { Pool } from "@/types/pool";
import CheckIcon from "@mui/icons-material/Check";
import DataField from "@/components/atoms/DataField";
import PoolCardActions from "./PoolCardActions";

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

interface PoolCardProps {
  poolData: Pool;
}

const PoolCard: React.FC<PoolCardProps> = ({ poolData }) => {
  const { id, name, amountDeposited, apy, rewards, imageUrl } = poolData || {};
  const router = useRouter();

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
            <Typography variant="h6" color="white" mt={2}>
              {name || ""}
            </Typography>
          </Box>
        }
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      />
      <CardContent>
        <DataField>
          <Typography color="text.secondary" fontWeight={600}>
            Amount Deposited:
          </Typography>
          <Typography color="white" fontWeight={700}>
            {amountDeposited || "N/A"}
          </Typography>
        </DataField>
        <DataField>
          <Typography color="text.secondary" fontWeight={600}>
            APY:
          </Typography>
          <Typography color="white" fontWeight={700}>
            {apy || "N/A"}
          </Typography>
        </DataField>
        <DataField>
          <Typography color="text.secondary" fontWeight={600}>
            Rewards:
          </Typography>
          <Typography color="white" fontWeight={700}>
            {rewards || "N/A"}
          </Typography>
        </DataField>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <PoolCardActions poolData={poolData} />
      </CardActions>
    </CardStyled>
  );
};

export default PoolCard;
