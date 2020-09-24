import React, { useState } from "react";
import Side from "../component/side/Side";
import "./home.css";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpeg";
import slider3 from "../images/slider3.jpg";
import man from "../images/man.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
function Home() {
  let current = 0;
  const [sliderArray] = useState([slider1, slider2, slider3]);
  const [image, setimage] = useState(sliderArray[current]);
  const sliderStyle = {
    backgroundImage: `url("${image}")`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
  function handleLeft() {}
  function handleRight() {
   current++;
    console.log(current);
    //setimage(sliderArray[current]);
    
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
