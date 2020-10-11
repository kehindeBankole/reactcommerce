import React, { useContext } from "react";
import { ProductContext } from "../../context/product/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
import "./item.css";
function Item() {
  const context = useContext(ProductContext);
  console.log(context.products);
  return (
    <>
      {context.products.map((data, i) => (
        <Link to={`/product/${data.id}`} className="link">
        <div class="card">
          
          <img src={data.image} alt="Avatar" style={{ width: "100%" }} />
          <p style={{fontSize:'1rem'}}>{data.title}</p>
          <p class="price">{data.price}</p>
          <p><Link to={`/product/${data.id}`}>
          <button><FontAwesomeIcon icon={faPlus}/></button>
          </Link>
            
          </p>
        </div>
        </Link>
      ))}
    </>
  );
}

export default Item;
