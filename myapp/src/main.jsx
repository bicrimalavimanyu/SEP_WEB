import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import { mainRoute } from "./route/mainRoute";
import PageNotFound from "./component/pages/PageNotFound";
import AdminAuth from "./auth/AdminAuth";
import AdminLayout from "./layout/AdminLayout";
import { AdminRoute } from "./route/AdminRoute";
import Login  from "./component/pages/Login";
import UserAuth from "./auth/UserAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminAuth />}>
          <Route path="/admin" element={<AdminLayout />}>
            {AdminRoute.map((ele, ind) => (
              <Route path={ele.path} element={<ele.component />} />
            ))}
          </Route>
        </Route>

        <Route element={<UserAuth />}>
          <Route path="/" element={<MainLayout />}>
            {mainRoute.map((ele, ind) => (
              <Route path={ele.path} element={<ele.component />} />
            ))}
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;