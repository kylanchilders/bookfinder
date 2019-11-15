//imports react package
import React from "react";
//uses deconstructor to imports col, row, and container components from grid component 
import { Col, Row, Container } from "../components/Grid";
//imports jumbotron component
import Jumbotron from "../components/Jumbotron";

//function to render empty results if nothing is captured from API call
function NoMatch() {
  return (
    //renders container component
    <Container fluid>
      {/*renders row component*/}
      <Row>
        {/*renders col component*/}
        <Col size="md-12">
          {/*renders jumbotron component*/}
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

//exports NoMatch function as a component
export default NoMatch;
