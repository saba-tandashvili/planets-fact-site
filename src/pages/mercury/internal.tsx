import "./mercury2.css"
import { Link } from "react-router-dom";
import Mercury from "../../assets/planet-mercury-internal.svg";
import Source from "../../assets/icon-source.svg";

export default function internal() {
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
              Mercury appears to have a solid silicate crust <br /> and mantle overlying a solid, iron sulfide outer <br /> core layer, a deeper liquid core layer, and a <br /> solid inner core. The planet's density is the <br /> second highest in the Solar System at 5.427 <br /> g/cm3 , only slightly less than Earth's density.
            </p>

            <p className="source">
              Source : <span>Wikipedia</span> <img src={Source} alt="" />{" "}
            </p>

            <div className="buttons-mercury-internal">
              <Link to={"/"}>
                <button className="overview"><p>01</p> <span>OVERVIEW</span></button>
              </Link>
              <Link to={"/mercury/internal"}>
                <button className="mercury-internal"><p>02</p> <span>INTERNAL STRUCTURE</span></button>
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
