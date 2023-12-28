import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-[1140px] mx-auto">
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  </div>
);
