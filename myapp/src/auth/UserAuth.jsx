import { Outlet, Navigate } from "react-router-dom";

export default function UserAuth() {
  const token = localStorage.getItem("token");
  const userType = localStorage.getItem("userType");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return userType === "User" ? <Outlet /> : <Navigate to="/error" replace />;
}
