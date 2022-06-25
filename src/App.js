import React from 'react';
import {
  HashRouter as Router,
  Switch,
} from "react-router-dom";

import Nav from "./components/Navigation"
import { Overlay } from "./components/Overlay"
import routes from "./routes"
import "./scss/global.scss";

function App() {
  return (
    <Router>
      <Nav />
      <Overlay/>
      <Switch>
        {routes}
      </Switch>
    </Router>
  );
}

export default App;
