import React, { useRef } from "react";
import Side from "../component/side/Side";
import "./home.css";
import man from "../images/man.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
function Home() {
  return (
    <>
      <div className="banner">
        <img src={man} alt="man laughing" />
        <input type="text" />
      </div>
      <div className="homecontent">
        <aside>
          <Side />
        </aside>
        <div className="slider">
          <button className="btn" id="left">
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          <button className="btn" id="right">
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
        <h1>jjjjj</h1>
      </div>
    </>
  );
}

export default Home;
