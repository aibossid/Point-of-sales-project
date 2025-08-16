import { createBrowserRouter } from "react-router-dom";
import Pos from "../pages/Pos";
import Report from "../pages/Report";
import { Inventory } from "../pages/Inventory";
export const routings = createBrowserRouter([
  {
    path: "/",
    element: <Pos />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "/inventory",
    element: <Inventory />,
  },
]);
