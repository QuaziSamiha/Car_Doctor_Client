import {  createBrowserRouter } from "react-router-dom";
import { Main } from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Authentication from "../layouts/Authentication/Authentication";
import Login from "../components/Authentication/Login/Login";
import Registration from "../components/Authentication/Registration/Registration";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "auth",
    element: <Authentication />,
    children: [
      { path: "login", element: <Login /> },
      { path: "registration", element: <Registration /> },
    ],
  },
]);

export default routes;
