import "./mars.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Mars from "../../assets/planet-mars.svg";
import MarsI from "../../assets/planet-mars-internal.svg";
import MarsG from "../../assets/geology-mars.png"
import Source from "../../assets/icon-source.svg";
import Data from "../../data.json";

export default function Overview() {
  function btnOverview() {
    setContent(Data[3].overview.content);
    setSource(Data[3].overview.source)
    setImg(Mars)
    setGeology("")
    setActive("active-mars")
  }

  function btnInternal() {
    setContent(Data[3].structure.content);
    setSource(Data[3].structure.source)
    setImg(MarsI)
    setGeology("")
  }

  function btnSurface() {
    setContent(Data[3].geology.content);
    setSource(Data[3].geology.source)
    setImg(Mars)
    setGeology(MarsG)
  }

  const [content, setContent] = useState(Data[3].overview.content);
  const [source, setSource] = useState(Data[3].overview.source);
  const [img, setImg] = useState(Mars);
  const [geology, setGeology] = useState<string>("")
  const [active, setActive] = useState<string>("active-mars")

  return (
    <div>
      <header>
        <h1>THE PLANETS</h1>

        <div className="planets-mars">
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
            <h1 className="title">{Data[3].name.toUpperCase()}</h1>
            <p className="details">{content}</p>

            <p className="source">
              Source : <a href={source}>Wikipedia</a>{" "}
              <img src={Source} alt="" />{" "}
            </p>

            <div className="buttons-mars-overview">
              <button id={source == Data[3].overview.source ? active : ""} onClick={btnOverview}>
                <p>01</p> <span>OVERVIEW</span>
              </button>

              <button id={source == Data[3].structure.source ? active : ""} onClick={btnInternal}>
                <p>02</p> <span>INTERNAL STRUCTURE</span>
              </button>

              <button id={source == Data[3].geology.source ? active : ""} onClick={btnSurface}>
                <p>03</p> <span>SURFACE GEOLOGY</span>
              </button>
            </div>
          </div>
        </div>

        <div className="specifics">
          <div>
            <p>ROTATION TIME</p>
            <h1>{Data[3].rotation}</h1>
          </div>

          <div>
            <p>REVOLUTION TIME</p>
            <h1>{Data[3].revolution}</h1>
          </div>

          <div>
            <p>RADIUS</p>
            <h1>{Data[3].radius}</h1>
          </div>

          <div>
            <p>AVERAGE TEMP</p>
            <h1>{Data[3].temperature}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
