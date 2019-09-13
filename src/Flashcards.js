import React from 'react';
import { Container, Header, } from "semantic-ui-react";
import FlashcardForm from "./FlashcardForm"


class Flashcards extends React.Component {
  state = {
    flashcards: [
      { id: 1, front: "What is state?", back: "An object of an array of objects to hold data." },
      { id: 2, front: "What are props?", back: "Props are used to pass data from a parent to the child." },
      { id: 3, front: "What are components?", back: "Components are like custom, reusable HTML elements." },
      { id: 4, front: "What are the 2 kinds of components?", back: "Functional and class." },
      { id: 5, front: "What data type is state?", back: "Always an object." },
    ],
    showBack: true,
  };

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 10000);
  };

  addFlashcard = (flashcardData) => {
    let flashcard = { id: this.getId(), ...flashcardData, };
    this.setState({ flashcards: [...this.state.flashcards, flashcard] });
  };

  removeFlashcard = (id) => {
    const flashcards = this.state.flashcards.filter(flashcard => {
      if (flashcard.id !== id)
        return flashcard
    });
    this.setState({ flashcards: [...flashcards,] });
  }

  toggleForm = () => this.setState({ showBack: !this.state.showBack, });

  render() {
    return (
      <Container style={{ paddingTop: "25px" }}>
        <Header as="h1">React Flashcards</Header>
        <br />
        <FlashcardForm add={this.addFlashcard} />
        <br />
        <Flashcards
          flashcards={this.state.flashcards}
          remove={this.removeFlashcard}
          toggle={this.toggleForm}
          showBack={this.state.showBack}
        />
      </Container>
    );
  };
};

export default Flashcards;
