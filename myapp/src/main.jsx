import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import { mainRoute } from "./route/mainRoute";
import PageNotFound from "./component/pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {mainRoute.map((ele, index) => (
            <Route
              key={index}
              path={ele.path}
              element={<ele.component />}
            />
          ))}
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;