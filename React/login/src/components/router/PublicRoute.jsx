import { useAuthContext } from "../../context/authContext";
import { PRIVATE } from "../../config/routes/paths";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) return <Navigate to={PRIVATE} />;
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicRoute;
