import { useAppContext } from "../../context/appContext";

export const Alert = () => {
  const { alertType, alertMessage } = useAppContext();

  return <div className={`alert alert-${alertType}`}>{alertMessage}</div>;
};
