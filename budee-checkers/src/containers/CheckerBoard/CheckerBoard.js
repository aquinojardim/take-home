import React, { Component } from "react";
// styling
import "./CheckerBoard.css";

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
          width: "500",
          height: "500",
          display: "grid",
          gridGap: "0px",
          gridTemplateColumns: `repeat(5,${cellDiameter}px)`,
          gridTemplateRows: `repeat(5,${cellDiameter}px)`,
          gridAutoFlow: "row"
        }}
      >
        {[...Array(25)].map((x, i) => (
          <div
            key={i}
            className={i % 2 !== 0 ? "black-cell" : "white-cell"}
          ></div>
        ))}
      </div>
    );
  }
}

export default CheckerBoard;
