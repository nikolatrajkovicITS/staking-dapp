import React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import useModalState from "@/hooks/context/useModalState";
import useWithdrawModalState from "@/hooks/context/useWithdrawModalState";
import WithdrawInput from "./WithdrawInput";
import SpinnerLoader from "@/components/molecules/loaders/SpinnerLoader";
import WithdrawPoolInfo from "./WithdrawPoolInfo";
import WithdrawCompleted from "./WithdrawCompleted";

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
    <Dialog
      open={modal.withdrawModal.isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>Withdraw 24W</DialogTitle>
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
      <DialogActions>
        <Button onClick={handleClose} disabled={loading}>
          {completed ? "Close" : "Cancel"}
        </Button>
        {!completed && (
          <Button
            onClick={handleWithdraw}
            variant="contained"
            color="primary"
            disabled={loading}
          >
            Withdraw
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default WithdrawModal;
