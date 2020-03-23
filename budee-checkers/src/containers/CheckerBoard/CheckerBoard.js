import React, { Component } from "react";
// styling
import "./CheckerBoard.css";
// prop-types
import PropTypes from "prop-types";

class CheckerBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { chosenCells } = this.props;

    // to get how many cells total are in board.
    const amountOfCells = chosenCells * chosenCells;
    // allows for the cells to be dynamic, split the total width evenly.
    const cellDiameter = 500 / 5;

    return (
      <div
        style={{
          width: "500px",
          height: "500px",
          display: "grid",
          gridGap: "0px",
          gridTemplateColumns: `repeat(${chosenCells},${cellDiameter}px)`,
          gridTemplateRows: `repeat(${chosenCells},${cellDiameter}px)`,
          gridAutoFlow: "row",
          margin: "auto",
        }}
      >
        {[...Array(amountOfCells)].map((x, i) => (
          <div
            key={i}
            className={i % 2 !== 0 ? "black-cell" : "white-cell"}
          ></div>
        ))}
      </div>
    );
  }
}

CheckerBoard.propTypes = {
  chosenCells: PropTypes.number.isRequired
};

export default CheckerBoard;
