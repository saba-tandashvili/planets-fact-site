import "./earth2.css";
import { Link } from "react-router-dom";
import Earth from "../../assets/planet-earth-internal.svg";
import Source from "../../assets/icon-source.svg";

export default function internal() {
  return (
    <div>
      <header>
        <h1>THE PLANETS</h1>

        <div className="planets-earth">
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
            <img src={Earth} alt="" />
          </div>

          <div className="info">
            <h1 className="title">EARTH</h1>
            <p className="details">
              Earth's interior, like that of the other terrestrial <br /> planets, is divided into layers by their chemical <br /> or physical (rheological) properties. The outer <br /> layer is a chemically distinct silicate solid crust, <br /> which is underlain by a highly viscous solid <br /> mantle.
            </p>

            <p className="source">
              Source : <span>Wikipedia</span> <img src={Source} alt="" />{" "}
            </p>

            <div className="buttons-earth-internal">
              <Link to={"/earth"}>
                <button className="overview"><p>01</p> <span>OVERVIEW</span></button>
              </Link>
              <Link to={"/earth/internal"}>
                <button className="earth-internal"><p>02</p> <span>INTERNAL STRUCTURE</span></button>
              </Link>
              <Link to={"/earth/surface"}>
                <button className="surface"><p>03</p> <span>SURFACE GEOLOGY</span></button>
              </Link>
            </div>
          </div>
        </div>

        <div className="specifics">
          <div>
            <p>ROTATION TIME</p>
            <h1>0.99 DAYS</h1>
          </div>

          <div>
            <p>REVOLUTION TIME</p>
            <h1>365.26 DAYS</h1>
          </div>

          <div>
            <p>RADIUS</p>
            <h1>6,371 km</h1>
          </div>

          <div>
            <p>AVERAGE TEMP</p>
            <h1>16°C</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
