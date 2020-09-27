import React from 'react'
import SimpleImageSlider from "react-simple-image-slider"
import slider1 from "../../images/slider1.jpg";
import slider2 from "../../images/slider2.jpeg";
import slider3 from "../../images/slider3.jpg";
const Slider = () => {
    const images = [
        { url: slider1},
        { url: slider2},
        { url: slider3},
    ];
    return (
        <div>
           <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                />
        </div>
    )
}

export default Slider
