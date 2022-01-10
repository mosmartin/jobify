import { DISPLAY_ALERT, CLEAR_ALERT } from "./actions";

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        // alertType: action.payload.alertType,
        // alertMessage: action.payload.alertMessage,
        alertType: "danger",
        alertMessage: "Please provide a valid inputs",
      };
    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertMessage: "",
      };
    default:
      return state;
  }
};
