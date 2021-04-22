import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./page/List";
import Count from "./page/Count";
import App from "./App.jsx";
import Parent from "./page/Parent";
import GGEditor from "./page/GGEditor";
import MyContext from "./components/context/MyContext";

class RouterContain extends Component {
  componentDidMount() {
    const { bus } = this.context;
    setInterval(() => {
      bus.emit()
    }, 1000);
  }
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

RouterContain.contextType = MyContext;

export default RouterContain;
