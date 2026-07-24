import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();
  return (
    <div>
      Admin NavBar
      <button
        className="text-green-600 font-semibold hover:underline"
        onClick={() => {
          console.log("clicked");
          localStorage.removeItem("token");
          localStorage.removeItem("userType");
          navigate("/login");
        }}
      >
        Logout
      </button>
      <Outlet />
      Admin Footer
    </div>
  );
}
