import React, { useReducer } from "react";
import { ProductContext } from "./context";
import ProductReducer from "./reducer";
function Productstate(props) {
  const initState = {
    products: [],
    load: true,
    err: "",
  };
  const [state, dispatch] = useReducer(ProductReducer, initState);
  function getproducts() {
    dispatch({ type: "fetch" });
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => dispatch({ type: "success", payload: json }))
      .catch((err) => dispatch({ type: "error", payload: err }));
  }
  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        load: state.load,
        err: state.err,
        getproducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default Productstate;
