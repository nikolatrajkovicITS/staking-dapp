import WithdrawModalProvider from "@/context/withdrawModal/withdrawModal.provider";

const WithdrawModalWrapper: React.FC<{ handleClose: () => void }> = ({
  handleClose,
}) => (
  <WithdrawModalProvider>
    <Withdrmod handleClose={handleClose} />
  </WithdrawModalProvider>
);

export default WithdrawModalWrapper;
