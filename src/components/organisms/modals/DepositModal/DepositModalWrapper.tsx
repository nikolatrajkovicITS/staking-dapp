import DepositModalState from "@/context/depositModal/depositModal.provider";
import DepositModal, { DepositModalProps } from ".";

const DepositModalWrapper: React.FC<DepositModalProps> = ({ handleClose }) => (
  <DepositModalState>
    <DepositModal handleClose={handleClose} />
  </DepositModalState>
);

export default DepositModalWrapper;
