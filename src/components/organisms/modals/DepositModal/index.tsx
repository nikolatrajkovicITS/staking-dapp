import React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  styled,
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
      <DialogTitleStyled>Deposit 24W</DialogTitleStyled>
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
      <DialogActionsStyled>
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
      </DialogActionsStyled>
    </DialogStyled>
  );
};

export default DepositModal;
