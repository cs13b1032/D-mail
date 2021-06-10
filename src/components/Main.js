import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./mainPage/MainPage";
import AddItem from "./addItem/AddItem";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" name="main" component={MainPage} />
          <Route path="/add-item" name="addItem" component={AddItem} />
        </Switch>
      </div>
    </Router>
  );
}
