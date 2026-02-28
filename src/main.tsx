import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MercuryOverview from "./pages/mercury/mercury.tsx";

import VenusOverview from "./pages/venus/venus.tsx";

import EarthOverview from "./pages/earth/earth.tsx";

import MarsOverview from "./pages/mars/mars.tsx";

import JupiterOverview from "./pages/jupiter/jupiter.tsx";

import SaturnOverview from "./pages/saturn/saturn.tsx";

import UranusOverview from "./pages/uranus/uranus.tsx";

import NeptuneOverview from "./pages/neptune/neptune.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MercuryOverview />,
  },

  {
    path: "/venus",
    element: <VenusOverview />,
  },

  {
    path: "/earth",
    element: <EarthOverview />,
  },

  {
    path: "/mars",
    element: <MarsOverview />,
  },

  {
    path: "/jupiter",
    element: <JupiterOverview />,
  },

  {
    path: "/saturn",
    element: <SaturnOverview />,
  },

  {
    path: "/uranus",
    element: <UranusOverview />,
  },

  {
    path: "/neptune",
    element: <NeptuneOverview />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>,
);
