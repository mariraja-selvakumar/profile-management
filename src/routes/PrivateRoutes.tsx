import { Navigate, Outlet } from "react-router-dom";
import { useMemo } from "react";

const PrivateRoutes = () => {
  const isAuthenticated = useMemo(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    return username === "Admin" && password === "Admin@123";
  }, []);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
