export enum TransactionStatus {
  IN_PROGRESS = "IN_PROGRESS",
  DECLINED = "DECLINED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
}

export enum TransactionType {
  FUNDS_DEPOSIT = "FUNDS_DEPOSIT",
  FUNDS_WITHDRAWAL = "FUNDS_WITHDRAWAL",
  TRANSACTION_CANCELATION = "TRANSACTION_CANCELATION",
}

export const TRANSACTION_MESSAGES = {
  [TransactionStatus.COMPLETED]:
    "The transaction has been successfully completed.",
  [TransactionStatus.DECLINED]: "The transaction has been declined.",
  [TransactionStatus.IN_PROGRESS]: "Your transaction request is in progress...",
  [TransactionType.FUNDS_DEPOSIT]: {
    [TransactionStatus.FAILED]: "Deposit failed. Check log for details.",
  },
  [TransactionType.FUNDS_WITHDRAWAL]: {
    [TransactionStatus.FAILED]: "Withdrawal failed. Check log for details.",
  },
  [TransactionType.TRANSACTION_CANCELATION]: {
    [TransactionStatus.FAILED]: "Cancellation failed. Check log for details.",
  },
} as const;
