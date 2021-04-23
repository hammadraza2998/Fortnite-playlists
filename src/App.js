import "./App.css";
import React from "react";
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";
import ShopItem from "./ShopItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/:id" component={ShopItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

const Home = () => {
  return (
    <div>
      <h1>Home Page </h1>
    </div>
  );
};
