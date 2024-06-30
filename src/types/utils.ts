export type ContextWrapper<TState, TAction> = TState & {
  dispatch: React.Dispatch<TAction>;
};
