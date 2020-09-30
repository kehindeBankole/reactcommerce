import React from "react";
import Home from "../src/pages/Home";
import ProductView from "./pages/ProductView"
import Nav from "./component/nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Productstate from "./context/product/state";

function App() {
  return (
<Productstate>
<Router>
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product/:id" component={ProductView} exact />
      </Switch>
    </Router>
</Productstate>
  );
}

export default App;
