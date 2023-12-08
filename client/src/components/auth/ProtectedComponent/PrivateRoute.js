
import { Navigate, useNavigate } from "react-router-dom";
import { useAdmin } from "../../../context/AdminContext";


// Create a PrivateRoute component
const PrivateRoute = ({ element, path }) => {
    const { isAdmin } = useAdmin();

  return isAdmin ? element : <Navigate to="/login" />;
    
  };

  export default PrivateRoute;