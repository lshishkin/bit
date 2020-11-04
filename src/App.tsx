import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles.css";
import News from "./components/news";
import Themes from "./components/themes";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Switch>
          <Route exact path="/">
            <News />
          </Route>
          <Route exact path="/theme">
            <Themes />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
