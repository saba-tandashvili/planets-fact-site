import "./saturn3.css";
import { Link } from "react-router-dom";
import Saturn from "../../assets/planet-saturn.svg";
import SaturnG from "../../assets/geology-saturn.png"
import Source from "../../assets/icon-source.svg";

export default function overview() {
  return (
    <div>
      <header>
        <h1>THE PLANETS</h1>

        <div className="planets-saturn">
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
            <img src={Saturn} alt="" />
            <img src={SaturnG} alt=""  className="saturn-geology"/>
          </div>

          <div className="info">
            <h1 className="title">SATURN</h1>
            <p className="details">
              The outer atmosphere of Saturn contains <br /> 96.3% molecular hydrogen and 3.25% helium <br /> by volume. The planet's most famous feature is <br /> its prominent ring system, which is composed <br /> mostly of ice particles with a smaller amount of <br /> rocky debris and dust. 
            </p>

            <p className="source">
              Source : <span>Wikipedia</span> <img src={Source} alt="" />{" "}
            </p>

            <div className="buttons-saturn-surface">
              <Link to={"/saturn"}>
                <button className="saturn-overview"><p>01</p> <span>OVERVIEW</span></button>
              </Link>
              <Link to={"/saturn/internal"}>
                <button className="internal"><p>02</p> <span>INTERNAL STRUCTURE</span></button>
              </Link>
              <Link to={"/saturn/surface"}>
                <button className="saturn-surface"><p>03</p> <span>SURFACE GEOLOGY</span></button>
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
