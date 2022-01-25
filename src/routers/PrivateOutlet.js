import { Navigate, Outlet} from "react-router-dom";

export const PrivateOutlet = ({isLogged}) => {
    return isLogged ? <Outlet /> : <Navigate to="/login" />;
  }