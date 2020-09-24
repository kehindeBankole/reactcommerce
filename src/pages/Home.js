import React, { useState } from "react";
import Side from "../component/side/Side";
import "./home.css";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpeg";
import man from "../images/man.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
function Home() {
  const [sliderArray] = useState([slider1 , slider2]);
  const sliderStyle = {
    backgroundImage: `url("${sliderArray[0]}")`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
  function handleLeft() {
    console.log(2);
  }
  function handleRight() {
    console.log(3);
  }
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
        <div className="slider" style={sliderStyle}>
          <button className="btn" id="left" onClick={handleLeft}>
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          <button className="btn" id="right" onClick={handleRight}>
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
        <h1>jjjjj</h1>
      </div>
    </>
  );
}

export default Home;
