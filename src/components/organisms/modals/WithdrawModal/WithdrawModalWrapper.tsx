import WithdrawModalProvider from "@/context/withdrawModal/withdrawModal.provider";
import WithdrawModal from ".";

const WithdrawModalWrapper: React.FC<{ handleClose: () => void }> = ({
  handleClose,
}) => (
  <WithdrawModalProvider>
    <WithdrawModal handleClose={handleClose} />
  </WithdrawModalProvider>
);

export default WithdrawModalWrapper;
