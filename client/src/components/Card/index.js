//importing our React package
import React from "react";

//functional component and passing it our icon, title, and children props
function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            {/* add an i tag and pass it our title and icon props */}
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      {/* add a div tag and pass it our children prop */}
      <div className="card-body">{children}</div>
    </div>
  );
}

//exports our Card component
export default Card;
