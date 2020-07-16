import React, { Component } from 'react'
import { Switch, Route, BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import List from './page/List';
import Count from "./page/Count";
import App from './App';
import AnimatedSwitch from './components/AnimatedSwitch';

class RouterContain extends Component {
constructor(props) {
    super(props)
}
 render(){
   return (
     <div>
       <Router>
         <Link to="/">app </Link>
         <Link to="/list">list </Link>
         <Link to="/count">count </Link>
         <AnimatedSwitch>
           <Route exact path="/" component={App} />
           <Route exact path="/list" component={List} />
           <Route exact path="/count" component={Count} />
         </AnimatedSwitch>
       </Router>
     </div>
   );
 }
}

export default RouterContain