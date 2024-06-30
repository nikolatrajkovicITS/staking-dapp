import { Dialog } from "@mui/material";

import useModalState from "@/hooks/context/useModalState";

import { Modals } from "@/context/modal/modal.types";
import { getModal } from "../organisms/modals/ModalManager";

const DialogWrapper: React.FC<{
  modalName: keyof Modals;
}> = ({ modalName }) => {
  const { modal, closeModal } = useModalState();

  const handleClose = () => closeModal(modalName);

  const modalDetails = getModal(modalName, handleClose);

  if (!modalDetails || !modal[modalName].isOpen) return;

  return (
    <Dialog
      open={modal[modalName].isOpen}
      PaperProps={{ sx: { width: 600 } }}
      onClose={handleClose}
      disableEnforceFocus
    >
      {modalDetails.component}
    </Dialog>
  );
};

export default DialogWrapper;
