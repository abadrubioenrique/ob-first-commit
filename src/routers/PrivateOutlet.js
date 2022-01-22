import { Navigate, Outlet} from "react-router-dom";

export const PrivateOutlet = ({isLogged}) => {

    console.log(isLogged);    
    console.log(`USUARIO LOGEADO: ${isLogged}`);
    return isLogged ? <Outlet /> : <Navigate to="/login" />;
  }