import React, { useContext } from "react";
import { ProductContext } from "../../context/product/context";
import "./item.css";
function Item() {
  const context = useContext(ProductContext);
  console.log(context.products);
  return (
    <>
      {context.products.map((data, i) => (
        <div class="card">
          <img src={data.image} alt="Avatar" style={{ width: "100%" }} />
          <p>{data.title}</p>
          <p class="price">{data.price}</p>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      ))}
    </>
  );
}

export default Item;
