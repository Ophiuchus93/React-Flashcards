import React from "react"
import { Button, Table, } from "semantic-ui-react";


const Flashcards = ({flashcards, remove, toggle, showForm}) => {

  const renderCards = () => {
    return flashcards.map( flashcard => 
      <>
      <Table.Row key={flashcard.id} {...flashcard} remove={remove}>
        
        <Table.Cell>{flashcard.front}</Table.Cell>
        <Table.Cell>
          <Button color="green" onClick={toggle}>
            Flip
          </Button>
          <Button color="red" onClick={() => remove(flashcard.id)}>
          Delete
          </Button>
        </Table.Cell>
      </Table.Row>
      </>
    )
  }

  const renderCardsBack = () => {
    return flashcards.map( flashcard => 
      <>
      <Table.Row key={flashcard.id} {...flashcard} remove={remove}>
        
        <Table.Cell>{flashcard.back}</Table.Cell>
        <Table.Cell>
          <Button color="green" onClick={toggle}>
            Flip
          </Button>
          <Button color="red" onClick={() => remove(flashcard.id)}>
          Delete
          </Button>
        </Table.Cell>
      </Table.Row>
      </>
    )
  }

  return showForm ? (
  <Table celled padded>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Front</Table.HeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
  {renderCards()}
  </Table.Body>
  </Table>
  ) : (
    <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Back</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  
    <Table.Body>
    {renderCardsBack()}
    </Table.Body>
    </Table>
  )
};


export default Flashcards;