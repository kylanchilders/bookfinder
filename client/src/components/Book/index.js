//Importing react package
import React from "react";
//Using a deconstructor to import the ListItem components from our list file
import { ListItem } from "../List";
//Using a deconstructor to import the Row and Column components from our grid file
import { Row, Col } from "../Grid";
//Importing our css stylesheet
import "./style.css";

//Declaring a functional component and passing it all our props
function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    //renders our ListItem Component
    <ListItem>
      {/* renders our Row component */}
      <Row className="flex-wrap-reverse">
        {/* renders our Col component */}
        <Col size="md-8">
          {/* adds a header tag and passes it our title prop */}
          <h3 className="font-italic">{title}</h3>
          {/* adds a header tag and passes it our subtitle prop */}
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        {/* renders our Col component */}
        <Col size="md-4">
          <div className="btn-container">
            {/* adds an a tag and passes it our link prop */}
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      {/* renders our Row component */}
      <Row>
        {/* renders our Col component */}
        <Col size="md-6">
          {/* adds a p tag and passes it our authorsr prop */}
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      {/* renders our Row component */}
      <Row>
        {/* renders our Col component */}
        <Col size="12 sm-4 md-2">
          {/* adds an image tag and passes it our image prop and title prop */}
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        {/* renders our Col component */}
        <Col size="12 sm-8 md-10">
          {/* adds a p tag and passes it our description prop */}
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

//exports our Book component
export default Book;
