import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/product/context";
import "./side.css";
function Side() {
  const context = useContext(ProductContext);
  let category;
  useEffect(() => {
 
    context.getproducts();
  }, []);

  category = [...context.products.map((d) => d.category)];
  return (
    <div>
      <div className="catcard">
        {[...new Set(category)].map((product, index) => (
          <div className="cat" key={index}>
            {product}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Side;
