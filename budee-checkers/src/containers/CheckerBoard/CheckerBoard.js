import React, { Component } from "react";

class CheckerBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const cellDiameter = 500 / 5;
    return (
      <div
        style={{
          width: "100vw",
          height: "50vh",
          display: "grid",
          gridGap: "0px",
          gridTemplateColumns: `repeat(5,${cellDiameter}px)`,
          gridTemplateRows: `repeat(5,${cellDiameter}px)`,
          gridAutoFlow: "row",
        }}
      >
        {[...Array(25)].map((x, i) => (
          <div key={i}>cell</div>
        ))}
      </div>
    );
  }
}

export default CheckerBoard;
