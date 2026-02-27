import "./uranus.css";
import { Link } from "react-router-dom";
import Uranus from "../../assets/planet-uranus.svg";
import Source from "../../assets/icon-source.svg";

export default function overview() {
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
              Uranus is the seventh planet from the Sun. Its <br /> name is a reference to the Greek god of the <br /> sky, Uranus according to Greek mythology, <br /> was the great-grandfather of Ares. It has the <br /> third-largest planetary radius and <br /> fourth-largest planetary mass in the Solar <br /> System.
            </p>

            <p className="source">
              Source : <span>Wikipedia</span> <img src={Source} alt="" />{" "}
            </p>

            <div className="buttons-uranus-overview">
              <Link to={"/uranus"}>
                <button className="uranus-overview"><p>01</p> <span>OVERVIEW</span></button>
              </Link>
              <Link to={"/uranus/internal"}>
                <button className="internal"><p>02</p> <span>INTERNAL STRUCTURE</span></button>
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
