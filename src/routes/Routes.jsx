import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Authentication from "../layouts/Authentication/Authentication";
import Login from "../components/Authentication/Login/Login";
import Registration from "../components/Authentication/Registration/Registration";
import CheckOut from "../pages/CheckOut/CheckOut";
import { Main } from "../layouts/Main/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "checkout/:id",
        element: <CheckOut />,
        loader: ({ params }) => {
          fetch(`http://localhost:5000/services/${params.id}`);
        },
      },
    ],
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
