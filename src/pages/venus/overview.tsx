import "./venus.css";
import { Link } from "react-router-dom";
import Venus from "../../assets/planet-venus.svg";
import Source from "../../assets/icon-source.svg";

export default function overview() {
  return (
    <div>
      <header>
        <h1>THE PLANETS</h1>

        <div className="planets-venus">
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
            <img src={Venus} alt="" />
          </div>

          <div className="info">
            <h1 className="title">VENUS</h1>
            <p className="details">
              Venus is the second planet from the Sun. It is <br /> named after the Roman goddess of love and <br /> beauty. As the brightest natural object in <br /> Earth's night sky after the Moon, Venus can cast <br /> shadows and can be, on rare occasions, visible <br /> to the naked eye in broad daylight.
            </p>

            <p className="source">
              Source : <span>Wikipedia</span> <img src={Source} alt="" />{" "}
            </p>

            <div className="buttons-venus-overview">
              <Link to={"/venus"}>
                <button className="venus-overview"><p>01</p> <span>OVERVIEW</span></button>
              </Link>
              <Link to={"/venus/internal"}>
                <button className="internal"><p>02</p> <span>INTERNAL STRUCTURE</span></button>
              </Link>
              <Link to={"/venus/surface"}>
                <button className="surface"><p>03</p> <span>SURFACE GEOLOGY</span></button>
              </Link>
            </div>
          </div>
        </div>

        <div className="specifics">
          <div>
            <p>ROTATION TIME</p>
            <h1>243 DAYS</h1>
          </div>

          <div>
            <p>REVOLUTION TIME</p>
            <h1>224.7 DAYS</h1>
          </div>

          <div>
            <p>RADIUS</p>
            <h1>6,051.8 km</h1>
          </div>

          <div>
            <p>AVERAGE TEMP</p>
            <h1>471°C</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
