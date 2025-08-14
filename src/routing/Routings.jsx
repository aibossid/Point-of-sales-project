import { createBrowserRouter } from "react-router-dom";
import Pos from "../pages/Pos";
import CartAside from "../components/CartAside";

export const routings = createBrowserRouter([
  {
    path: "/",
    element: <Pos />,
  },
  {
    path: "/cart",
    element: <CartAside />,
  },
]);
