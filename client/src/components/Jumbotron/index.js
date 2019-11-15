//import our react package
import React from "react";
//import our css stylesheet
import "./style.css";

//functional component we pass our children prop
function Jumbotron({ children }) {
  //add div tag and pass it children prop
  return <div className="jumbotron mt-4">{children}</div>;
}
//export our Jumbotron component
export default Jumbotron;
