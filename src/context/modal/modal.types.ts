import { Pool } from "@/types/pool";

export type ModalBase = {
  isOpen: boolean;
};

export enum ModalsActionTypes {
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
}

export enum ModalsKeys {
  WITHDRAW = "withdrawModal",
  DEPOSIT = "depositModal",
  TRANSACTION_PROCESSING = "transactionProcessingModal",
}

export type ModalAction =
  | { type: ModalsActionTypes.OPEN_MODAL; name: keyof Modals; content?: any }
  | { type: ModalsActionTypes.CLOSE_MODAL; name: keyof Modals };

export type ModalData<T = void> = T extends void ? ModalBase : T & ModalBase;

export type Modals = {
  transactionProcessingModal: ModalData;
  withdrawModal: ModalData<{ poolData: Pool }>;
  depositModal: ModalData<{ poolData: Pool }>;
};

export type ModalWithProps = Extract<
  keyof Modals,
  "withdrawModal" | "depositModal" | "transactionProcessingModal"
>;

export type OpenModalWithProps<T extends keyof Modals> = Omit<
  Modals[T],
  "isOpen"
> & {
  name: ModalWithProps;
};

export type OpenModalWithoutProps<T extends keyof Modals> = {
  name: T;
};

export type OpenModalParam<T extends keyof Modals> = T extends ModalWithProps
  ? OpenModalWithProps<T>
  : OpenModalWithoutProps<T>;

export type ModalStateType = {
  modal: Modals;
  openModal: <T extends keyof Modals>(args: OpenModalParam<T>) => void;
  closeModal: (name: keyof Modals) => void;
};
