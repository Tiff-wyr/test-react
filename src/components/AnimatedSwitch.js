import React from 'react'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch } from "react-router-dom";

import "./AnimatedSwitch.css"

function AnimatedSwitch(props) {
  console.log("location", props);
  return (
    <TransitionGroup>
      <CSSTransition
        key={props.location.key}
        classNames={props.type || "fade"}
        timeout={props.duration || 500}
      >
        <Switch location={props.location}>{props.children}</Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default AnimatedSwitch