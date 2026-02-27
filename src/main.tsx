import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MercuryOverview from "./pages/mercury/overview";
import MercuryInternal from "./pages/mercury/internal";
import MercurySurface from "./pages/mercury/surface";

import VenusOverview from "./pages/venus/overview"
import VenusInternal from "./pages/venus/internal"
import VenusSurface from "./pages/venus/surface"

import EarthOverview from "./pages/earth/overview"
import EarthInternal from "./pages/earth/internal"
import EarthSurface from "./pages/earth/surface"

import MarsOverview from "./pages/mars/overview"
import MarsInternal from "./pages/mars/internal"
import MarsSurface from "./pages/mars/surface"

import JupiterOverview from "./pages/jupiter/overview"
import JupiterInternal from "./pages/jupiter/internal"
import JupiterSurface from "./pages/jupiter/surface"

import SaturnOverview from "./pages/saturn/overview"
import SaturnInternal from "./pages/saturn/internal"
import SaturnSurface from "./pages/saturn/surface"

import UranusOverview from "./pages/uranus/overview"
import UranusInternal from "./pages/uranus/internal"
import UranusSurface from "./pages/uranus/surface"

import NeptuneOverview from "./pages/neptune/overview"
import NeptuneInternal from "./pages/neptune/internal"
import NeptuneSurface from "./pages/neptune/surface"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MercuryOverview />,
  },
  {
    path: "/mercury/internal",
    element: <MercuryInternal />,
  },
  {
    path: "/mercury/surface",
    element: <MercurySurface />,
  },



  {
    path: "/venus",
    element: <VenusOverview />,
  },
  {
    path: "/venus/internal",
    element: <VenusInternal />,
  },
  {
    path: "/venus/surface",
    element: <VenusSurface />,
  },


  
  {
    path: "/earth",
    element: <EarthOverview />,
  },
  {
    path: "/earth/internal",
    element: <EarthInternal />,
  },
  {
    path: "/earth/surface",
    element: <EarthSurface />,
  },



  {
    path: "/mars",
    element: <MarsOverview />,
  },
  {
    path: "/mars/internal",
    element: <MarsInternal />,
  },
  {
    path: "/mars/surface",
    element: <MarsSurface />,
  },


  {
    path: "/jupiter",
    element: <JupiterOverview />,
  },
  {
    path: "/jupiter/internal",
    element: <JupiterInternal />,
  },
  {
    path: "/jupiter/surface",
    element: <JupiterSurface />,
  },


  {
    path: "/saturn",
    element: <SaturnOverview />,
  },
  {
    path: "/saturn/internal",
    element: <SaturnInternal />,
  },
  {
    path: "/saturn/surface",
    element: <SaturnSurface />,
  },


  {
    path: "/uranus",
    element: <UranusOverview />,
  },
  {
    path: "/uranus/internal",
    element: <UranusInternal />,
  },
  {
    path: "/uranus/surface",
    element: <UranusSurface />,
  },


  {
    path: "/neptune",
    element: <NeptuneOverview />,
  },
  {
    path: "/neptune/internal",
    element: <NeptuneInternal />,
  },
  {
    path: "/neptune/surface",
    element: <NeptuneSurface />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>,
);
