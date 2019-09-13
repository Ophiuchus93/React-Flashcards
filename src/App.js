import React from 'react';
import { Route, } from 'react-router-dom';
import Flashcards from './Flashcards';

const App = () => (
  <Route exact path="/flashcards" component={Flashcards} />
);

export default App