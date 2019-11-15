//Using desconstructor to import "Component" feature from react package
import React, { Component } from "react";
//Importing our jumbotron component from our components folder
import Jumbotron from "../components/Jumbotron";
//Importing our card component from our components folder
import Card from "../components/Card";
//Importing our Form component from our components folder
import Form from "../components/Form";
//Importing our book component from our components folder
import Book from "../components/Book";
//Imporing our Footer component from our components folder
import Footer from "../components/Footer";
//Importing our api routes from API.js file in utils, which includes axios and ajax queries
import API from "../utils/API";
//Using a desconstructor to import Col, Row, and Container components from our Grid file in components folder
import { Col, Row, Container } from "../components/Grid";
//Using a deconstructor to import List component from within the list file in our components folder
import { List } from "../components/List";

//Using the Component feature from our react package to declare and set the state of the Home page in our application
class Home extends Component {
  //This is our state object
  state = {
    //our books key in our state object is set as an empty array
    books: [],
    //our q key in our state object is set to an empty string
    q: "",
    //our message key in our state object is a string that says "Search for a book to begin!"
    message: "Search For A Book To Begin!"
  };

  //Function that uses an event to detect input change event and update our state object
  handleInputChange = event => {
    //Desconstructing the event into a name key and value to be used to update our state.
    const { name, value } = event.target;
    //Setting our state object using a dynamic key (name) that is in our components to update the corresponding key in our state
    this.setState({
      [name]: value
    });
  };

  //Function that begins an AJAX call to a route in our API js file to retrieve a list of books
  getBooks = () => {
    //references the q key in our state object
    API.getBooks(this.state.q)
      //callback funtion taking in the response of our getBooks API call
      .then(res =>
        //uses the response from the api call to set the books key value in our state object
        this.setState({
          books: res.data
        })
      )
      //listener function that is called if the response is empty from our ajax all
      .catch(() =>
        //sets state based on our empty response
        this.setState({
          //sets books key value in our state object to an empty array.
          books: [],
          //sets message key value in our state object to a string notifying the user that no new books were found
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  //Function that takes in an event (submitting the form)
  handleFormSubmit = event => {
    //stops page from refreshing on submit
    event.preventDefault();
    //runs our getBooks function api call
    this.getBooks();
  };

  //Function that takes in id as an argument
  handleBookSave = id => {
    //declares a constant variable called book and sets it to a book in our books array in our state object that has a corresponding id to the argument this function was passed.
    const book = this.state.books.find(book => book.id === id);

    //A function that is an ajax post route using our API.js file to save book information in our saved books section
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  //render method to our components based on our state
  render() {
    return (
      //renders our container component
      <Container>
        {/* renders our row components that we imported from our grid component */}
        <Row>
          {/* renders our column components that we imported from our grid component */}
          <Col size="md-12">
            {/* renders our jumbotron components that we imported} */}
            <Jumbotron>
              {/* feeds component a header tag with class text-center */}
              <h1 className="text-center">
                {/* adds bolded text inside a strong tag */}
                <strong>(React) Google Books Search</strong>
              </h1>
              {/* feeds component a header tag with class text-center */}
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
          {/* renders our column components that we imported from our grid component */}
          <Col size="md-12">
            {/* renders our Card component we imported*/}
            <Card title="Book Search" icon="far fa-book">
              {/* renders our Form component*/}
              <Form
                /* passing a prop from our handleInputChange function to change data that is rendered in this component*/
                handleInputChange={this.handleInputChange}
                 /* passing a prop from our handleFormSubmit function to change data that is rendered in this component*/
                handleFormSubmit={this.handleFormSubmit}
                /* sets q in our From component to q from our state object*/
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        {/* renders our row component*/}
        <Row>
          {/* renders our col component*/}
          <Col size="md-12">
            {/* renders our card component*/}
            <Card title="Results">
              {/* passes prop that is equal to the length of the books array in our state */}
              {this.state.books.length ? (
                /* Renders our List component */
                <List>
                  {/* uses the map method on our books array in our state object to render the info for each book in our state*/}
                  {this.state.books.map(book => (
                    /*renders a book component for each book in our book array in our state and passes it props with the information for each of those books*/
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        //renders a button that allows you to run the handleBookSave function for the book the button was rendered for
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                //renders a header with the message key value from our state
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

//exports whole page as component to be imported by our app.js file to be rendered to the dom
export default Home;
