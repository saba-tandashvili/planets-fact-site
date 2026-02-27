import "./neptune2.css";
import { Link } from "react-router-dom";
import Neptune from "../../assets/planet-neptune-internal.svg";
import Source from "../../assets/icon-source.svg";

export default function internal() {
  return (
    <div>
      <header>
        <h1>THE PLANETS</h1>

        <div className="planets-neptune">
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
            <img src={Neptune} alt="" />
          </div>

          <div className="info">
            <h1 className="title">NEPTUNE</h1>
            <p className="details">
              Neptune's internal structure resembles that of <br /> Uranus. Its atmosphere forms about 5% to 10% <br /> of its mass and extends perhaps 10% to 20% of <br /> the way towards the core. Increasing <br /> concentrations of methane, ammonia and <br /> water are found in the lower regions.
            </p> 

            <p className="source">
              Source : <span>Wikipedia</span> <img src={Source} alt="" />{" "}
            </p>

            <div className="buttons-neptune-internal">
              <Link to={"/neptune"}>
                <button className="overview"><p>01</p> <span>OVERVIEW</span></button>
              </Link>
              <Link to={"/neptune/internal"}>
                <button className="neptune-internal"><p>02</p> <span>INTERNAL STRUCTURE</span></button>
              </Link>
              <Link to={"/neptune/surface"}>
                <button className="surface"><p>03</p> <span>SURFACE GEOLOGY</span></button>
              </Link>
            </div>
          </div>
        </div>

        <div className="specifics">
          <div>
            <p>ROTATION TIME</p>
            <h1>16.08 hours</h1>
          </div>

          <div>
            <p>REVOLUTION TIME</p>
            <h1>164.79 years</h1>
          </div>

          <div>
            <p>RADIUS</p>
            <h1>24,622 km</h1>
          </div>

          <div>
            <p>AVERAGE TEMP</p>
            <h1>-201°C</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
