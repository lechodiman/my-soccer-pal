import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import GamesList from "../components/Games/GamesList";
import GameDetails from "../components/Games/Details";
import CreateGame from "../components/Games/CreateGame";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/games" exact component={GamesList}></Route>
      <Route path="/games/details/:id" exact component={GameDetails}></Route>
      <Route path="/games/new" exact component={CreateGame}></Route>
    </Switch>
  </Router>
);
