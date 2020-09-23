import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/product/context";
import "./side.css";
function Side() {
  const context = useContext(ProductContext);
  const category = [];
  useEffect(() => {
    context.getproducts();
  }, []);
 console.log(category)

  return (
    <div>
      <div className="catcard">
        {context.products.map((product) => (
          <div className="cat">{product.category}</div>
        ))}
      </div>
    </div>
  );
}

export default Side;
