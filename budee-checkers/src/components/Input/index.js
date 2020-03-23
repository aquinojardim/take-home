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

  onSubmit = () => {
    const { chosenValue } = this.state;
    console.log(chosenValue);
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
        <button onClick={this.onSubmit}>Change Checkerboard Size</button>
      </div>
    );
  }
}

export default Input;
