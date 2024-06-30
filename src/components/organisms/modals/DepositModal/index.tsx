import useModalState from "@/hooks/context/useModalState";
import { Box } from "@mui/material";

export type DepositModalProps = {
  handleClose: () => void;
};

const DepositModal: React.FC<DepositModalProps> = ({ handleClose }) => {
  const { modal } = useModalState();
  const poolData = modal.depositModal.poolData;

  return (
    <Box>
      <h1> Deposit </h1>
    </Box>
  );
};

export default DepositModal;
