import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenValue: 5
    };
  }

  handleChange = chosenValue => {
    this.setState({ chosenValue });
  };


  render() {
    const { chosenValue } = this.state;

    return (
      <div>
        <input
          type="number"
          onChange={event => this.handleChange(event.target.value)}
          max={20}
          min={5}
          value={chosenValue}
        />
      </div>
    );
  }
}

export default Input;
