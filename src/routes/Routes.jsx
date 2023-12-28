import { createBrowserRouter } from "react-router-dom";
import { Main } from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default routes;