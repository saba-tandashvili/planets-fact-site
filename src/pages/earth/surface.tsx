import "./earth3.css";
import { Link } from "react-router-dom";
import Earth from "../../assets/planet-earth.svg";
import EarthG from "../../assets/geology-earth.png"
import Source from "../../assets/icon-source.svg";

export default function overview() {
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
            <img src={EarthG} alt=""  className="earth-geology"/>
          </div>

          <div className="info">
            <h1 className="title">EARTH</h1>
            <p className="details">
              The total surface area of Earth is about 510 <br /> million km2. The continental crust consists of <br /> lower density material such as the igneous <br /> rocks granite and andesite. Less common is <br /> basalt, a denser volcanic rock that is the <br /> primary constituent of the ocean floors.
            </p>

            <p className="source">
              Source : <span>Wikipedia</span> <img src={Source} alt="" />{" "}
            </p>

            <div className="buttons-earth-surface">
              <Link to={"/earth"}>
                <button className="earth-overview"><p>01</p> <span>OVERVIEW</span></button>
              </Link>
              <Link to={"/earth/internal"}>
                <button className="internal"><p>02</p> <span>INTERNAL STRUCTURE</span></button>
              </Link>
              <Link to={"/earth/surface"}>
                <button className="earth-surface"><p>03</p> <span>SURFACE GEOLOGY</span></button>
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
