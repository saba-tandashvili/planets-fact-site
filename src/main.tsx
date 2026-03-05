import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Planets from "./pages/Planets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/mercury"} />,
  },
  {
    path: "/mercury",
    element: <Planets />,
  },
  {
    path: "/:planetName",
    element: <Planets />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>,
);
