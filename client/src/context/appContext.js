import { createContext, useContext, useReducer } from "react";
import { DISPLAY_ALERT } from "./actions";
import { reducer } from "./reducer";

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertType: "",
  alertMessage: "",
};

const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
