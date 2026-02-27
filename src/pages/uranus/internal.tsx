import "./uranus2.css";
import { Link } from "react-router-dom";
import Uranus from "../../assets/planet-uranus-internal.svg";
import Source from "../../assets/icon-source.svg";

export default function internal() {
  return (
    <div>
      <header>
        <h1>THE PLANETS</h1>

        <div className="planets-uranus">
          <Link to={"/"}>
            <p>MERCURY</p>{" "}
          </Link>
          <Link to={"/venus"}>
            <p>VENUS</p>{" "}
          </Link>
          <Link to={"/earth"}>
            <p>EARTH</p>{" "}
          </Link>
          <Link to={"/mars"}>
            <p>MARS</p>{" "}
          </Link>
          <Link to={"/jupiter"}>
            <p>JUPITER</p>{" "}
          </Link>
          <Link to={"/saturn"}>
            <p>SATURN</p>{" "}
          </Link>
          <Link to={"/uranus"}>
            <p>URANUS</p>{" "}
          </Link>
          <Link to={"/neptune"}>
            <p>NEPTUNE</p>{" "}
          </Link>
        </div>
      </header>

      <div className="main">
        <div className="top">
          <div className="planet">
            <img src={Uranus} alt="" />
          </div>

          <div className="info">
            <h1 className="title">URANUS</h1>
            <p className="details">
              The standard model of Uranus's structure is <br /> that it consists of three layers: a rocky <br /> (silicate/iron–nickel) core in the centre, an icy <br /> mantle in the middle and an outer gaseous <br /> hydrogen/helium envelope. The core is <br /> relatively small, with a mass of only 0.55 Earth <br /> masses.
            </p>

            <p className="source">
              Source : <span>Wikipedia</span> <img src={Source} alt="" />{" "}
            </p>

            <div className="buttons-uranus-internal">
              <Link to={"/uranus"}>
                <button className="overview"><p>01</p> <span>OVERVIEW</span></button>
              </Link>
              <Link to={"/uranus/internal"}>
                <button className="uranus-internal"><p>02</p> <span>INTERNAL STRUCTURE</span></button>
              </Link>
              <Link to={"/uranus/surface"}>
                <button className="surface"><p>03</p> <span>SURFACE GEOLOGY</span></button>
              </Link>
            </div>
          </div>
        </div>

        <div className="specifics">
          <div>
            <p>ROTATION TIME</p>
            <h1>17.2 HOURS</h1>
          </div>

          <div>
            <p>REVOLUTION TIME</p>
            <h1>84 YEARS</h1>
          </div>

          <div>
            <p>RADIUS</p>
            <h1>25,362 km</h1>
          </div>

          <div>
            <p>AVERAGE TEMP</p>
            <h1>-195°C</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
