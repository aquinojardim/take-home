import React, { Component } from "react";

class CheckerBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "50vh",
          display: "grid",
          gridGap: "0px",
          gridTemplateColumns: `repeat(5,${20}px)`,
          gridTemplateRows: `repeat(5,${20}px)`,
          gridAutoFlow: "row"
        }}
      >
          test
      </div>
    );
  }
}

export default CheckerBoard;
