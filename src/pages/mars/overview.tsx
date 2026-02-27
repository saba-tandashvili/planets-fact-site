import "./mars.css";
import { Link } from "react-router-dom";
import Mars from "../../assets/planet-mars.svg";
import Source from "../../assets/icon-source.svg";

export default function overview() {
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
              Mars is the fourth planet from the Sun and the <br /> second-smallest planet in the Solar System, <br /> being larger than only Mercury. In English, <br /> Mars carries the name of the Roman god of <br /> war and is often referred to as the "Red <br /> Planet".
            </p>

            <p className="source">
              Source : <span>Wikipedia</span> <img src={Source} alt="" />{" "}
            </p>

            <div className="buttons-mars-overview">
              <Link to={"/mars"}>
                <button className="mars-overview"><p>01</p> <span>OVERVIEW</span></button>
              </Link>
              <Link to={"/mars/internal"}>
                <button className="internal"><p>02</p> <span>INTERNAL STRUCTURE</span></button>
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
