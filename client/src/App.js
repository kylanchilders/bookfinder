//import react package
import React from "react";
//import BrowserRouter, Route, and Switch features from react-router-dom package. BrowserRouter is imported as Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Home component
import Home from "./pages/Home";
//import Saved Component
import Saved from "./pages/Saved";
//import NoMatch component
import NoMatch from "./pages/NoMatch";
//import Nav Component
import Nav from "./components/Nav";

//Our app function used to render all components to the dom
function App() {
  return (
    //uses router component imported above to be able to pass different routes to render different components based on URL
    <Router>
      <div>
        {/*render our nav component*/}
        <Nav />
        {/*switch is imported from our react-router-dom to allow us to pass various paths for routing*/}
        <Switch>
          {/*Root route that renders our Home component*/}
          <Route exact path="/" component={Home} />
          {/*saved route that renders our saved component*/}
          <Route exact path="/saved" component={Saved} />
          {/*an "else" route that renders our NoMatch component if the URL reflects any routes other than the two above*/}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

//Exports our App function for use in our index file
export default App;
