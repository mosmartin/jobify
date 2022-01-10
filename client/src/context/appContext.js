import { createContext, useContext, useState } from "react";

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertMessage: "",
  alertType: "",
};

const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
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
