import { Outlet, Navigate } from "react-router-dom";

export default function AdminAuth() {
  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("userType");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return userType === "Admin" ? <Outlet /> : <Navigate to="/error" replace />;
}
