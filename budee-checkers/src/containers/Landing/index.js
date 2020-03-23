import React, { Component } from "react";
// components
import Input from "../../components/Input";
import CheckerBoard from "../CheckerBoard/CheckerBoard";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Input />
        <CheckerBoard />
      </div>
    );
  }
}

export default Landing;
