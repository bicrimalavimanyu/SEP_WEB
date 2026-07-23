import { lazy } from "react";

const About = lazy(() => import("../component/pages/About"));
const Home = lazy(() => import("../component/pages/Home"));
const ProductDetail = lazy(() => import("../component/pages/ProductDetail"));

// import About from "../component/pages/About";
// import Home from "../component/pages/Home";
// import ProductDetail from "../component/pages/ProductDetail";

const mainRoute = [
  {
    path: "",
    component: Home,
  },
  {
    path: "about",
    component: About,
  },
  {
    path: "product-details/:id",
    component: ProductDetail,
  },
];

export { mainRoute };
