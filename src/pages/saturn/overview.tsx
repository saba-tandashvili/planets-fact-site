import "./saturn.css";
import { Link } from "react-router-dom";
import Saturn from "../../assets/planet-saturn.svg";
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
          </div>

          <div className="info">
            <h1 className="title">SATURN</h1>
            <p className="details">
              Saturn is the sixth planet from the Sun and the <br /> second-largest in the Solar System, after <br /> Jupiter. It is a gas giant with an average radius <br /> of about nine and a half times that of Earth. It  <br /> only has one-eighth the average density of <br /> Earth.
            </p>

            <p className="source">
              Source : <span>Wikipedia</span> <img src={Source} alt="" />{" "}
            </p>

            <div className="buttons-saturn-overview">
              <Link to={"/saturn"}>
                <button className="saturn-overview"><p>01</p> <span>OVERVIEW</span></button>
              </Link>
              <Link to={"/saturn/internal"}>
                <button className="internal"><p>02</p> <span>INTERNAL STRUCTURE</span></button>
              </Link>
              <Link to={"/saturn/surface"}>
                <button className="surface"><p>03</p> <span>SURFACE GEOLOGY</span></button>
              </Link>
            </div>
          </div>
        </div>

        <div className="specifics">
          <div>
            <p>ROTATION TIME</p>
            <h1>10.8 HOURS</h1>
          </div>

          <div>
            <p>REVOLUTION TIME</p>
            <h1>29.46 YEARS</h1>
          </div>

          <div>
            <p>RADIUS</p>
            <h1>58,232 km</h1>
          </div>

          <div>
            <p>AVERAGE TEMP</p>
            <h1>-138°c</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
