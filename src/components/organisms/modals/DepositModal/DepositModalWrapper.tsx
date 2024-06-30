import DepositModalProvider from "@/context/depositModal/depositModal.provider";
import DepositModal from ".";

const DepositModalWrapper: React.FC<{ handleClose: () => void }> = ({
  handleClose,
}) => (
  <DepositModalProvider>
    <DepositModal handleClose={handleClose} />
  </DepositModalProvider>
);

export default DepositModalWrapper;
