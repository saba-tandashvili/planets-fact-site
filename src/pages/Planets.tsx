import "./planets.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Source from "../assets/icon-source.svg";
import Data from "../data.json";

import Mercury from "../assets/planet-mercury.svg";
import MercuryI from "../assets/planet-mercury-internal.svg";
import MercuryG from "../assets/geology-mercury.png";

import Venus from "../assets/planet-venus.svg";
import VenusI from "../assets/planet-venus-internal.svg";
import VenusG from "../assets/geology-venus.png";

import Earth from "../assets/planet-earth.svg";
import EarthI from "../assets/planet-earth-internal.svg";
import EarthG from "../assets/geology-earth.png";

import Mars from "../assets/planet-mars.svg";
import MarsI from "../assets/planet-mars-internal.svg";
import MarsG from "../assets/geology-mars.png";

import Jupiter from "../assets/planet-jupiter.svg";
import JupiterI from "../assets/planet-jupiter-internal.svg";
import JupiterG from "../assets/geology-jupiter.png";

import Saturn from "../assets/planet-saturn.svg";
import SaturnI from "../assets/planet-saturn-internal.svg";
import SaturnG from "../assets/geology-saturn.png";

import Uranus from "../assets/planet-uranus.svg";
import UranusI from "../assets/planet-uranus-internal.svg";
import UranusG from "../assets/geology-uranus.png";

import Neptune from "../assets/planet-neptune.svg";
import NeptuneI from "../assets/planet-neptune-internal.svg";
import NeptuneG from "../assets/geology-neptune.png";

type TPlanets = {
  planet: string;
  internal: string; 
  geology: string
}

const planetImages: Record<string, TPlanets> = {
  mercury: { planet: Mercury, internal: MercuryI, geology: MercuryG },
  venus: { planet: Venus, internal: VenusI, geology: VenusG },
  earth: { planet: Earth, internal: EarthI, geology: EarthG },
  mars: { planet: Mars, internal: MarsI, geology: MarsG },
  jupiter: { planet: Jupiter, internal: JupiterI, geology: JupiterG },
  saturn: { planet: Saturn, internal: SaturnI, geology: SaturnG },
  uranus: { planet: Uranus, internal: UranusI, geology: UranusG },
  neptune: { planet: Neptune, internal: NeptuneI, geology: NeptuneG },
};

export default function Planets() {
  const { planetName } = useParams();
  const planet =
    Data.find((p) => p.name.toLowerCase() === planetName?.toLowerCase()) ||
    Data[0];

  const [active, setActive] = useState<"overview" | "internal" | "surface">(
    "overview",
  );

  useEffect(() => {
    document.documentElement.style.setProperty("--planet-color", planet.color);
  }, [planet.color]);

  const activeData =
    active === "overview"
      ? planet.overview
      : active === "internal"
        ? planet.structure
        : planet.geology;

  const activeImg =
    active === "overview"
      ? planetImages[planet.name.toLowerCase()].planet
      : active === "internal"
        ? planetImages[planet.name.toLowerCase()].internal
        : planetImages[planet.name.toLowerCase()].planet;

  const activeGeology =
    active === "surface" ? planetImages[planet.name.toLowerCase()].geology : "";

  return (
    <div>
      <header>
        <h1>THE PLANETS</h1>
        <div className="planets">
          {Data.map((p) => (
            <Link key={p.name} to={`/${p.name.toLowerCase()}`}>
              <p>{p.name.toUpperCase()}</p>
            </Link>
          ))}
        </div>
      </header>

      <div className="main">
        <div className="top">
          <div className="planet">
            <img src={activeImg} alt={planet.name} />
            <img
              src={activeGeology}
              alt=""
              className="geology"
              style={{ display: activeGeology === "" ? "none" : "block" }}
            />
          </div>

          <div className="info">
            <h1 className="title">{planet.name.toUpperCase()}</h1>
            <p className="details">{activeData.content}</p>

            <p className="source">
              Source: <a href={activeData.source}>Wikipedia</a>{" "}
              <img src={Source} alt="source icon" />
            </p>

            <div className="buttons-overview">
              <button
                style={{
                  backgroundColor: active === "overview" ? planet.color : "",
                }}
                onClick={() => setActive("overview")}
              >
                <p>01</p> <span>OVERVIEW</span>
              </button>
              <button
                style={{
                  backgroundColor: active === "internal" ? planet.color : "",
                }}
                onClick={() => setActive("internal")}
              >
                <p>02</p> <span>INTERNAL STRUCTURE</span>
              </button>
              <button
                style={{
                  backgroundColor: active === "surface" ? planet.color : "",
                }}
                onClick={() => setActive("surface")}
              >
                <p>03</p> <span>SURFACE GEOLOGY</span>
              </button>
            </div>
          </div>
        </div>

        <div className="specifics">
          <div>
            <p>ROTATION TIME</p>
            <h1>{planet.rotation}</h1>
          </div>
          <div>
            <p>REVOLUTION TIME</p>
            <h1>{planet.revolution}</h1>
          </div>
          <div>
            <p>RADIUS</p>
            <h1>{planet.radius}</h1>
          </div>
          <div>
            <p>AVERAGE TEMP</p>
            <h1>{planet.temperature}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
