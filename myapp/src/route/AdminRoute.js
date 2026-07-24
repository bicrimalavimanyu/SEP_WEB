import OderHistory from "../component/pages/admin/OderHistory";
import ProductAdd from "../component/pages/admin/ProductAdd";
import User from "../component/pages/admin/User";

const AdminRoute = [
  {
    path: "",
    component: User,
  },
  {
    path: "add-product",
    component: ProductAdd,
  },
  {
    path: "order-history",
    component: OderHistory,
  },
];

export { AdminRoute };
