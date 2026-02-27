import "./neptune3.css";
import { Link } from "react-router-dom";
import Neptune from "../../assets/planet-neptune.svg";
import NeptuneG from "../../assets/geology-neptune.png"
import Source from "../../assets/icon-source.svg";

export default function overview() {
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
            <img src={NeptuneG} alt=""  className="neptune-geology"/>
          </div>

          <div className="info">
            <h1 className="title">NEPTUNE</h1>
            <p className="details">
              Neptune's atmosphere is 80% hydrogen and <br /> 19% helium. A trace amount of methane is also <br /> present. Prominent absorption bands of <br /> methane exist at wavelengths above 600 nm, <br /> in the red and infrared portion of the spectrum.
            </p>

            <p className="source">
              Source : <span>Wikipedia</span> <img src={Source} alt="" />{" "}
            </p>

            <div className="buttons-neptune-surface">
              <Link to={"/neptune"}>
                <button className="neptune-overview"><p>01</p> <span>OVERVIEW</span></button>
              </Link>
              <Link to={"/neptune/internal"}>
                <button className="internal"><p>02</p> <span>INTERNAL STRUCTURE</span></button>
              </Link>
              <Link to={"/neptune/surface"}>
                <button className="neptune-surface"><p>03</p> <span>SURFACE GEOLOGY</span></button>
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
