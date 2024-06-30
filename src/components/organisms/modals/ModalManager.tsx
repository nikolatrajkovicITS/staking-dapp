"use client";

import useModalState from "@/hooks/context/useModalState";

import DepositModalWrapper from "@/components/organisms/modals/DepositModal/DepositModalWrapper";

import { Modals, ModalsKeys } from "@/context/modal/modal.types";
import DialogWrapper from "@/components/atoms/DialogWrapper";

type ModalDetails = {
  component: JSX.Element;
};

export const getModal = (
  modalName: keyof Modals,
  handleClose: () => void
): ModalDetails | null => {
  switch (modalName) {
    case ModalsKeys.DEPOSIT:
      return {
        component: <DepositModalWrapper handleClose={handleClose} />,
      };
    default:
      return null;
  }
};

const ModalManager = () => {
  const { modal } = useModalState();

  return (
    <>
      {Object.keys(modal).map((modalName) => (
        <DialogWrapper key={modalName} modalName={modalName as keyof Modals} />
      ))}
    </>
  );
};

export default ModalManager;
