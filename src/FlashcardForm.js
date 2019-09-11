import React from "react";
import { Form, } from "semantic-ui-react";

class FlashcardForm extends React.Component {
  state = { front: "", back: "",}

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({front: "", back: "",});
  }

  handleChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value, });
  };

 

  render() {
    return(
  <Form onSubmit={this.handleSubmit}>
    <Form.Group widths="equal">
      <Form.Input
        fluid
        label="Front"
        placeholder="Front"
        name="front"
        value={this.state.front}
        onChange={this.handleChange}
      />
      
      <Form.Input
      fluid
      label="Back"
      placeholder="Back"
      name="back"
      value={this.state.back}
      onChange={this.handleChange}
    />
       <Form.Button color="blue">Submit</Form.Button>
      </Form.Group>
    </Form>
    )
  }
}

export default FlashcardForm;