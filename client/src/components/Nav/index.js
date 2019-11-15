//Use deconstructor to import both full react package and specifically component feature from it
import React, { Component } from "react";
//Use deconstructor to import Link feature from react-router-dom package
import { Link } from "react-router-dom";
//Import our stylesheet
import "./style.css";

//Uses component from react to add State object from react package
class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  //Function to make app mobile responsive
  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }
    //sets with width in the State object to the new width
    this.setState(newState);
  };

  //Function to update the navbar tab to highlight the current tab
  toggleNav = () => {
    //sets the open key in the state object
    this.setState({ open: !this.state.open });
  };

  //Function to make full page and resources load before rendering
  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  //Our render function to render our app to the virtual dom
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        {/* renders adds our Link component */}
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        {/* adds button tag and passes it this.toggleNav prop */}
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* adds div tag and passes it this.state.open as child prop in parent prop */}
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* renders our Link component and passes it this.toggleNav and window.location.pathname as props*/}
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              {/* renders our Link component and passes it this.toggleNav and window.location.pathname as props*/}
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

//exportes our Nav component
export default Nav;
