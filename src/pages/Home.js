import React, { useState, useRef, useEffect } from "react";
import Side from "../component/side/Side";
import "./home.css";
import slider1 from "../images/slider1.jpg";
import slider2 from "../images/slider2.jpeg";
import slider3 from "../images/slider3.jpg";
import man from "../images/man.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
function Home() {
  let current = 0
const images = [slider1 , slider2 , slider3]

const [image , setimage] = useState(images[0])
function handleLeft(){

}
function handleRight(){
  if(current===images.length-1){
    current=-1
  }
setimage(images[current+1])
current++
console.log(current)

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
        <div className="slider">
          {/* <div className="slide slide1"  ></div>
          <div className="slide slide2">
            
          </div>
          <div className="slide slide3">
            
          </div> */}
          <img src={image} id="slider" alt="slider"/>
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
