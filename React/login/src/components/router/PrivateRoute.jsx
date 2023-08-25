import { useAuthContext } from "../../context/authContext";
import { LOGIN } from "../../config/routes/paths";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) return <Navigate to="/" />;
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PrivateRoute;
