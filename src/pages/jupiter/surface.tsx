import "./jupiter3.css";
import { Link } from "react-router-dom";
import Jupiter from "../../assets/planet-jupiter.svg";
import JupiterG from "../../assets/geology-jupiter.png"
import Source from "../../assets/icon-source.svg";

export default function overview() {
  return (
    <div>
      <header>
        <h1>THE PLANETS</h1>

        <div className="planets-jupiter">
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
            <img src={Jupiter} alt="" />
            <img src={JupiterG} alt=""  className="jupiter-geology"/>
          </div>

          <div className="info">
            <h1 className="title">JUPITER</h1>
            <p className="details">
              The best known feature of Jupiter is the Great <br /> Red Spot, a persistent anticyclonic storm <br /> located 22° south of the equator. It is known to <br /> have existed since at least 1831, and possibly <br /> since 1665.
            </p>

            <p className="source">
              Source : <span>Wikipedia</span> <img src={Source} alt="" />{" "}
            </p>

            <div className="buttons-jupiter-surface">
              <Link to={"/jupiter"}>
                <button className="jupiter-overview"><p>01</p> <span>OVERVIEW</span></button>
              </Link>
              <Link to={"/jupiter/internal"}>
                <button className="internal"><p>02</p> <span>INTERNAL STRUCTURE</span></button>
              </Link>
              <Link to={"/jupiter/surface"}>
                <button className="jupiter-surface"><p>03</p> <span>SURFACE GEOLOGY</span></button>
              </Link>
            </div>
          </div>
        </div>

        <div className="specifics">
          <div>
            <p>ROTATION TIME</p>
            <h1>9.93 HOURS</h1>
          </div>

          <div>
            <p>REVOLUTION TIME</p>
            <h1>11.86 YEARS</h1>
          </div>

          <div>
            <p>RADIUS</p>
            <h1>69,911 km</h1>
          </div>

          <div>
            <p>AVERAGE TEMP</p>
            <h1>-108°C</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
