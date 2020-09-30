import React, { useState, useRef, useEffect } from "react";
import {useParams} from "react-router-dom"
function ProductView(){
    let { id }= useParams()
// console.log(id)
return(
    <div>
    {id}
    </div>
)
}

export default ProductView