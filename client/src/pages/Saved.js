//uses deconstructor to import Component feature from React package
import React, { Component } from "react";
//imports jumbotron component
import Jumbotron from "../components/Jumbotron";
//imports card component
import Card from "../components/Card";
//imports book component
import Book from "../components/Book";
//imports footer component
import Footer from "../components/Footer";
//import API calls from our utils folder
import API from "../utils/API";
//uses deconstructor to import Col, Row, and Container components from our grid component
import { Col, Row, Container } from "../components/Grid";
//imports List component
import { List } from "../components/List";

//Uses component feature from react package to extend save page to use state.
class Saved extends Component {
  //our state object
  state = {
    //sets books key value in our state to an empty array
    books: []
  };

  //Waits for all resources to load prior to performing our javascript
  componentDidMount() {
    //runs getSavedBooks function using this (referencing our global scope)
    this.getSavedBooks();
  }

  //function called getSavedBooks that hits our APIs we imported
  getSavedBooks = () => {
    API.getSavedBooks()
      //callback function using the response of our getSavedBooks api call
      .then(res =>
        //sets our books array in our state to the response
        this.setState({
          books: res.data
        })
      )
      //if an error occurs, render the error to the console
      .catch(err => console.log(err));
  };

  //function that takes in id as an argument
  handleBookDelete = id => {
    //deleteBook ajax call against our API that uses the id to delete the corresponding book
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  //render method for our components
  render() {
    return (
      //render container component
      <Container>
        {/*render row component*/}
        <Row>
          {/* render col component*/}
          <Col size="md-12">
            {/* render jumbotron component*/}
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        {/*render row component*/}
        <Row>
          {/* render col component*/}
          <Col size="md-12">
            {/* render card component*/}
            <Card title="Saved Books" icon="download">
              {/* references the length of the books array in our state*/}
              {this.state.books.length ? (
                <List>
                  {/*uses map function on each the items in our book array in our state*/}
                  {this.state.books.map(book => (
                    /* renders book component for each of the books in our books array in our state and passes book info as props*/
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                        //uses onclick function to reference ID of book corresponding to the delete button and delting that book from our saved books
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

//Exports our saved.js file as a component for use in our app.js file
export default Saved;
