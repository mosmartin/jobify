import { DISPLAY_ALERT } from "./actions";

export const reducer = (state = {}, action) => {
  //   switch (action.type) {
  //     case "SET_LOADING":
  //       return {
  //         ...state,
  //         isLoading: action.payload,
  //       };
  //     case "SHOW_ALERT":
  //       return {
  //         ...state,
  //         showAlert: action.payload.showAlert,
  //         alertMessage: action.payload.alertMessage,
  //         alertType: action.payload.alertType,
  //       };
  //     default:
  //       return state;
  //   }

  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertMessage: "Please provide a valid inputs",
    };
  }

  throw new Error(`Reducer not implemented for ${action.type}`);
};
