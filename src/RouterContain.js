import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./page/List";
import Count from "./page/Count";
import App from "./App";
import Parent from "./page/Parent";
import GGEditor from "./page/GGEditor";

class RouterContain extends Component {
  render() {
    return (
      <div>
        <Router>
          <Link to="/">app </Link>
          <Link to="/list">list </Link>
          <Link to="/count">count </Link>
          <Link to="/parent">parent</Link>
          <Link to="/gg-editor">GGEditor</Link>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/list" component={List} />
            <Route exact path="/count" component={Count} />
            <Route path="/parent" component={Parent} />
            <Route path="/gg-editor" component={GGEditor} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default RouterContain;
