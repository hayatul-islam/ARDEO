import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated === "true" ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
