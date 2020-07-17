import React from "react"
import { Link, Route } from "react-router-dom"
import AnimatedSwitch from "../components/AnimatedSwitch";
import A from "./reouterPage/Apage";
import B from "./reouterPage/Bpage";
import C from "./reouterPage/Cpage";

export default function Parent(props) {
    console.log("parent组件", props)
    return (
      <div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Link to="/parent/a">a</Link>
          <Link to="/parent/b">b</Link>
          <Link to="/parent/c">c</Link>
        </div>
        <div>
          <AnimatedSwitch location={props.location}>
            <Route path="/parent/a">
              <A />
            </Route>
            <Route path="/parent/b" component={B} />
            <Route path="/parent/c" component={C} />
          </AnimatedSwitch>
        </div>
      </div>
    );
}