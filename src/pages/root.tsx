import { Navigate, useRoutes } from "react-router-dom";
import App from "../App";
import menus from "./menus";

const Root = () => {
  return useRoutes([
    {
      path: "/",
      element: <App />,
      children: [
        ...menus,
        {
          path: "*",
          element: <Navigate to={"/"} />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to={"/"} />,
    },
  ]);
};
export default Root;
