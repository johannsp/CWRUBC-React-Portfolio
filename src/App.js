import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";
import './App.css';

function App() {
  //const Basename="/";
  //const Basename="/CWRUBC-React-Portfolio";
  //const Basename="CWRUBC-React-Portfolio/";
  const Basename=`${process.env.PUBLIC_URL}/`;
  return (
    <Router basename={Basename}>
      <div>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
