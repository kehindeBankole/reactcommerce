import React, { useContext } from "react";
import { ProductContext } from "../../context/product/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import "./item.css";
function Item() {
  const context = useContext(ProductContext);
  console.log(context.products);
  return (
    <>
      {context.products.map((data, i) => (
        <div class="card">
          <img src={data.image} alt="Avatar" style={{ width: "100%" }} />
          <p style={{fontSize:'1rem'}}>{data.title}</p>
          <p class="price">{data.price}</p>
          <p>
            <button><FontAwesomeIcon icon={faPlus}/></button>
          </p>
        </div>
      ))}
    </>
  );
}

export default Item;
