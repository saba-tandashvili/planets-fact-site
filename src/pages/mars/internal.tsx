import "./mars2.css";
import { Link } from "react-router-dom";
import Mars from "../../assets/planet-mars-internal.svg";
import Source from "../../assets/icon-source.svg";

export default function internal() {
  return (
    <div>
      <header>
        <h1>THE PLANETS</h1>

        <div className="planets-mars">
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
            <img src={Mars} alt="" />
          </div>

          <div className="info">
            <h1 className="title">MARS</h1>
            <p className="details">
              Like Earth, Mars has differentiated into a dense <br /> metallic core overlaid by less dense materials. <br /> Scientists initially determined that the core is at <br /> least partially liquid. Current models of its <br /> interior imply a core consisting primarily of iron <br /> and nickel with about 16–17% sulfur.
            </p>

            <p className="source">
              Source : <span>Wikipedia</span> <img src={Source} alt="" />{" "}
            </p>

            <div className="buttons-mars-internal">
              <Link to={"/mars"}>
                <button className="overview"><p>01</p> <span>OVERVIEW</span></button>
              </Link>
              <Link to={"/mars/internal"}>
                <button className="mars-internal"><p>02</p> <span>INTERNAL STRUCTURE</span></button>
              </Link>
              <Link to={"/mars/surface"}>
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
