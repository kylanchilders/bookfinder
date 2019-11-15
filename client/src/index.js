//Imports react component
import React from "react";
//Imports react dom component
import ReactDOM from "react-dom";
//imports app component for rendering all of our other components to the dom
import App from "./App";
//imports registerServiceWorker
import registerServiceWorker from "./registerServiceWorker";

//App is our parent component that renders all other components as they are called based on the state and path and appends them to our elemtn with an ID "root"
ReactDOM.render(<App />, document.getElementById("root"));

//executes our registerServiceWorker function that we imported.
registerServiceWorker();
