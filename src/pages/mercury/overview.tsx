import "./mercury.css";
import { Link } from "react-router-dom";
import Mercury from "../../assets/planet-mercury.svg";
import Source from "../../assets/icon-source.svg";

export default function overview() {
  return (
    <div>
      <header>
        <h1>THE PLANETS</h1>

        <div className="planets-mercury">
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
            <img src={Mercury} alt="" />
          </div>

          <div className="info">
            <h1 className="title">MERCURY</h1>
            <p className="details">
              Mercury is the smallest planet in the Solar <br /> System and the
              closest to the Sun. Its orbit <br /> around the Sun takes 87.97
              Earth days, the <br /> shortest of all the Sun's planets. Mercury
              is one <br /> of four terrestrial planets in the Solar System,{" "}
              <br /> and is a rocky body like Earth.
            </p>

            <p className="source">
              Source : <span>Wikipedia</span> <img src={Source} alt="" />{" "}
            </p>

            <div className="buttons-mercury-overview">
              <Link to={"/"}>
                <button className="mercury-overview"><p>01</p> <span>OVERVIEW</span></button>
              </Link>
              <Link to={"/mercury/internal"}>
                <button className="internal"><p>02</p> <span>INTERNAL STRUCTURE</span></button>
              </Link>
              <Link to={"/mercury/surface"}>
                <button className="surface"><p>03</p> <span>SURFACE GEOLOGY</span></button>
              </Link>
            </div>
          </div>
        </div>

        <div className="specifics">
          <div>
            <p>ROTATION TIME</p>
            <h1>58.6 DAYS</h1>
          </div>

          <div>
            <p>REVOLUTION TIME</p>
            <h1>87.97 DAYS</h1>
          </div>

          <div>
            <p>RADIUS</p>
            <h1>2,439.7 km</h1>
          </div>

          <div>
            <p>AVERAGE TEMP</p>
            <h1>430°C</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
