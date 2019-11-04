import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import GamesList from "../components/Games/GamesList";
import GameDetails from "../components/Games/Details/GameDetails";
import CreateGame from "../components/Games/CreateGame";
import { AnimatedSwitch } from "react-router-transition";

export default (
  <Router>
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route path="/" exact component={Home} />
      <Route path="/games" exact component={GamesList}></Route>
      <Route path="/games/details/:id" exact component={GameDetails}></Route>
      <Route path="/games/new" exact component={CreateGame}></Route>
    </AnimatedSwitch>
  </Router>
);
