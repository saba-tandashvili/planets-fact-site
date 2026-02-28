import "./earth.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Earth from "../../assets/planet-earth.svg";
import EarthI from "../../assets/planet-earth-internal.svg";
import EarthG from "../../assets/geology-earth.png"
import Source from "../../assets/icon-source.svg";
import Data from "../../data.json";

export default function Overview() {
  function btnOverview() {
    setContent(Data[2].overview.content);
    setSource(Data[2].overview.source)
    setImg(Earth)
    setGeology("")
    setActive("active-earth")
  }

  function btnInternal() {
    setContent(Data[2].structure.content);
    setSource(Data[2].structure.source)
    setImg(EarthI)
    setGeology("")
  }

  function btnSurface() {
    setContent(Data[2].geology.content);
    setSource(Data[2].geology.source)
    setImg(Earth)
    setGeology(EarthG)
  }

  const [content, setContent] = useState(Data[2].overview.content);
  const [source, setSource] = useState(Data[2].overview.source);
  const [img, setImg] = useState(Earth);
  const [geology, setGeology] = useState<string>("")
  const [active, setActive] = useState<string>("active-earth")

  return (
    <div>
      <header>
        <h1>THE PLANETS</h1>

        <div className="planets-earth">
          <Link to={"/"}>
            <p>{Data[0].name.toUpperCase()}</p>{" "}
          </Link>
          <Link to={"/venus"}>
            <p>{Data[1].name.toUpperCase()}</p>{" "}
          </Link>
          <Link to={"/earth"}>
            <p>{Data[2].name.toUpperCase()}</p>{" "}
          </Link>
          <Link to={"/mars"}>
            <p>{Data[3].name.toUpperCase()}</p>{" "}
          </Link>
          <Link to={"/jupiter"}>
            <p>{Data[4].name.toUpperCase()}</p>{" "}
          </Link>
          <Link to={"/saturn"}>
            <p>{Data[5].name.toUpperCase()}</p>{" "}
          </Link>
          <Link to={"/uranus"}>
            <p>{Data[6].name.toUpperCase()}</p>{" "}
          </Link>
          <Link to={"/neptune"}>
            <p>{Data[7].name.toUpperCase()}</p>{" "}
          </Link>
        </div>
      </header>

      <div className="main">
        <div className="top">
          <div className="planet">
            <img src={img} alt="" />
            <img src={geology} alt=""  className="geology" style={{display: geology === "" ? "none" : "block"}}  />
          </div>

          <div className="info">
            <h1 className="title">{Data[2].name.toUpperCase()}</h1>
            <p className="details">{content}</p>

            <p className="source">
              Source : <a href={source}>Wikipedia</a>{" "}
              <img src={Source} alt="" />{" "}
            </p>

            <div className="buttons-earth-overview">
              <button id={source == Data[2].overview.source ? active : ""} onClick={btnOverview}>
                <p>01</p> <span>OVERVIEW</span>
              </button>

              <button id={source == Data[2].structure.source ? active : ""} onClick={btnInternal}>
                <p>02</p> <span>INTERNAL STRUCTURE</span>
              </button>

              <button id={source == Data[2].geology.source ? active : ""} onClick={btnSurface}>
                <p>03</p> <span>SURFACE GEOLOGY</span>
              </button>
            </div>
          </div>
        </div>

        <div className="specifics">
          <div>
            <p>ROTATION TIME</p>
            <h1>{Data[2].rotation}</h1>
          </div>

          <div>
            <p>REVOLUTION TIME</p>
            <h1>{Data[2].revolution}</h1>
          </div>

          <div>
            <p>RADIUS</p>
            <h1>{Data[2].radius}</h1>
          </div>

          <div>
            <p>AVERAGE TEMP</p>
            <h1>{Data[2].temperature}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
