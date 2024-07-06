import React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  styled,
} from "@mui/material";
import useModalState from "@/hooks/context/useModalState";
import useWithdrawModalState from "@/hooks/context/useWithdrawModalState";
import WithdrawInput from "./WithdrawInput";
import SpinnerLoader from "@/components/molecules/loaders/SpinnerLoader";
import WithdrawPoolInfo from "./WithdrawPoolInfo";
import WithdrawCompleted from "./WithdrawCompleted";
import PrimaryButton from "@/components/atoms/PrimaryButton";

const DialogStyled = styled(Dialog)(({ theme }) => ({
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
}));

const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.3)",
  color: theme.palette.text.primary,
  textAlign: "center",
  padding: theme.spacing(2),
}));

const DialogActionsStyled = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
}));

const WithdrawModal: React.FC<{ handleClose: () => void }> = ({
  handleClose,
}) => {
  const { modal } = useModalState();
  const {
    loading,
    completed,
    txHash,
    setTxHash,
    startLoading,
    stopLoading,
    setError,
    updateTransactionStatus,
  } = useWithdrawModalState();
  const poolData = modal.withdrawModal.poolData;

  const handleWithdraw = async () => {
    startLoading();
    try {
      const mockTxHash = "0x1234567890abcdef";
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setTxHash(mockTxHash);
    } catch (err) {
      setError("Transaction failed");
      stopLoading();
    } finally {
      setTimeout(() => {
        stopLoading();
        updateTransactionStatus();
      }, 3000);
    }
  };

  return (
    <DialogStyled
      open={modal.withdrawModal.isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitleStyled>Withdraw 24W</DialogTitleStyled>
      <DialogContent>
        {loading ? (
          <SpinnerLoader />
        ) : completed ? (
          <WithdrawCompleted txHash={txHash || ""} />
        ) : (
          <Box>
            <WithdrawPoolInfo poolData={poolData} />
            <WithdrawInput />
          </Box>
        )}
      </DialogContent>
      <DialogActionsStyled>
        <PrimaryButton onClick={handleClose} disabled={loading}>
          {completed ? "Close" : "Cancel"}
        </PrimaryButton>
        {!completed && (
          <PrimaryButton
            onClick={handleWithdraw}
            variant="contained"
            color="primary"
            disabled={loading}
          >
            Withdraw
          </PrimaryButton>
        )}
      </DialogActionsStyled>
    </DialogStyled>
  );
};

export default WithdrawModal;
