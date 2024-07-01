import React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import useModalState from "@/hooks/context/useModalState";
import useDepositModalState from "@/hooks/context/useDepositModalState";
import DepositInput from "./DepositInput";
import SpinnerLoader from "@/components/molecules/loaders/SpinnerLoader";
import DepositPoolInfo from "./DepositPoolInfo";
import DepositCompleted from "./DepositCompleted";
import useToastState from "@/hooks/context/useToastState";
import {
  TRANSACTION_MESSAGES,
  TransactionStatus,
} from "@/constats/transactionStatus";

const DepositModal: React.FC<{ handleClose: () => void }> = ({
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
  } = useDepositModalState();
  const poolData = modal.depositModal.poolData;

  const handleDeposit = async () => {
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
      open={modal.depositModal.isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>Deposit 24W</DialogTitle>
      <DialogContent>
        {loading ? (
          <SpinnerLoader />
        ) : completed ? (
          <DepositCompleted txHash={txHash || ""} />
        ) : (
          <Box>
            <DepositPoolInfo poolData={poolData} />
            <DepositInput />
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} disabled={loading}>
          {completed ? "Close" : "Cancel"}
        </Button>
        {!completed && (
          <Button
            onClick={handleDeposit}
            variant="contained"
            color="primary"
            disabled={loading}
          >
            Deposit
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default DepositModal;
