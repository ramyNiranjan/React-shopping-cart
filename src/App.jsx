import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/checkout" component={Checkout} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;
