import React, { Component } from "react";
// components
import UserInput from "../../components/UserInput";
import CheckerBoard from "../CheckerBoard/CheckerBoard";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenCells: 5
    };
  }

  handleChangeInValue = chosenCells => {
    this.setState({chosenCells})
  };

  render() {
    const { chosenCells } = this.state;

    return (
      <div>
        <UserInput updateChosenValue={this.handleChangeInValue} />
        <CheckerBoard chosenCells={chosenCells} />
      </div>
    );
  }
}

export default Landing;
