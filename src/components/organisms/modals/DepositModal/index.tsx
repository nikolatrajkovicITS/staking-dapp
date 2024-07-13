import React from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  styled,
  Typography,
} from "@mui/material";
import useModalState from "@/hooks/context/useModalState";
import useDepositModalState from "@/hooks/context/useDepositModalState";
import DepositInput from "./DepositInput";
import SpinnerLoader from "@/components/molecules/loaders/SpinnerLoader";
import DepositPoolInfo from "./DepositPoolInfo";
import DepositCompleted from "./DepositCompleted";

const DialogStyled = styled(Dialog)(({ theme }) => ({
  background: theme.palette.background.default,
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  p: 2,
}));

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
    <DialogStyled
      open={modal.depositModal.isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <Typography variant="h4" textAlign="center" mt={2}>
        Deposit
      </Typography>
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

      <DialogActions sx={{ display: "flex", justifyContent: "center", pb: 2 }}>
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
    </DialogStyled>
  );
};

export default DepositModal;
