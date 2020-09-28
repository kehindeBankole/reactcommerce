import React , { useState}  from 'react'
import slider1 from "../../images/slider1.jpg";
import slider2 from "../../images/slider2.jpeg";
import slider3 from "../../images/slider3.jpg";
import './slider.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
const Slider = () => {
    const[current , setCurrent] = useState(0)
  const images = [slider1, slider2, slider3]

  function handleLeft() {
    setCurrent(current===0? images.length-1 : current - 1)
    console.log(current)
  }
  function handleRight() {
    setCurrent(current===images.length-1? 0 : current + 1)
  }

    return (
        <div>
          <div className="slider">
          {
            images.map((d,i)=>(
              <div className={i===current?`slide active`:`slide`}>
                <img src={d} alt="" id="sliderimage"/>
              </div>
            ))
          }
          <button className="btn" id="left" onClick={handleLeft}>
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
          <button className="btn" id="right" onClick={handleRight}>
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
        </div>
    )
}

export default Slider
