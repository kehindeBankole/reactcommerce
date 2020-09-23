import React from "react";
import Home from "../src/pages/Home";
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
      </Switch>
    </Router>
</Productstate>
  );
}

export default App;
