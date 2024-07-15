import React from "react";
import { Box, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import PrimaryButton from "@/components/atoms/PrimaryButton";
import { ModalsKeys } from "@/context/modal/modal.types";
import useModalState from "@/hooks/context/useModalState";
import { Pool } from "@/types/pool";

interface PoolCardActionsProps {
  poolData: Pool;
}

const PoolCardActions: React.FC<PoolCardActionsProps> = ({ poolData }) => {
  const { account } = useWeb3React();
  const { openModal } = useModalState();

  const handleOpenDeposit = () =>
    poolData && openModal({ name: ModalsKeys.DEPOSIT, poolData });

  const handleOpenWithdraw = () =>
    poolData && openModal({ name: ModalsKeys.WITHDRAW, poolData });

  return (
    <>
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
    </>
  );
};

export default PoolCardActions;
