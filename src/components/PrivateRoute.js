import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children }) => {
  const { isLogin } = useSelector((state) => state.loginUser);
  return isAuthenticated === "true" || isLogin ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoute;
