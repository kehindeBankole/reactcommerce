import React, { useState, useRef, useEffect } from "react";
import Side from "../component/side/Side";
import "./home.css";
import Item from "../component/product/Item";
import man from "../images/man.png";
import Slider from "../component/slider/Slider";
function Home() {


 return (
    <>
      <div className="banner">
        <img src={man} alt="banner image one" />
        <input type="text" />
      </div>
      <div className="homecontent">
        <aside>
          <Side />
        </aside>
        <div className="contentarea">
          <Slider />
          <h1>jjjjj</h1>
        </div>
      </div>
      <div className="products">
        <div></div>
       <div id="item">
       <Item/>
       </div>
      </div>
    </>
  );
}

export default Home;
