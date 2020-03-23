import React, { Component } from "react";
// components
import UserInput from "../../components/UserInput";
import CheckerBoard from "../CheckerBoard/CheckerBoard";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <UserInput />
        <CheckerBoard chosenCells={5}/>
      </div>
    );
  }
}

export default Landing;
