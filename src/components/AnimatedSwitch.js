import React from 'react'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch } from "react-router-dom";

import "./AnimatedSwitch.css"

function AnimatedSwitch(props) {
  console.log("location", props.location);
  return (
    <TransitionGroup>
      <CSSTransition
        key={"animate"}
        classNames={props.type || "fade"}
        timeout={props.duration || 1000}
      >
        <Switch location={props.location}>{props.children}</Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default AnimatedSwitch