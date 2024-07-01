import {
  ToastActions,
  ToastStateType,
  ToastActionTypes,
} from "@/context/toast/toast.types";

const toastReducer = (
  state: ToastStateType,
  action: ToastActions
): ToastStateType => {
  switch (action.type) {
    case ToastActionTypes.SET_TOAST:
      return {
        ...state,
        toast: action.payload,
      };
    case ToastActionTypes.REMOVE_TOAST:
      return {
        ...state,
        toast: null,
      };
    default:
      return state;
  }
};

export default toastReducer;
