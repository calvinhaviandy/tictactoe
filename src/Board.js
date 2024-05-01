import React, { Component } from "react";
import Square from "./Square";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Squares: Array(9).fill(null),
      isNext: true,
    };
  }

  handleClick(i) {
    // let squareData = [...this.state.Squares];
    let squareData = this.state.Squares.slice();
    if (calculate(this.state.Squares) || squareData[i]) {
      return;
    }
    squareData[i] = this.state.isNext ? "x" : "o";
    this.setState({
      Squares: squareData,
      isNext: !this.state.isNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.Squares[i]}
        onClick={() => {
          this.handleClick(i);
        }}
      />
    );
  }

  render() {
    const winner = calculate(this.state.Squares);

    const status = winner
      ? `winner : ${winner}`
      : `Pemain Selanjutnya : ${this.state.isNext ? "x" : "o"}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function calculate(squares) {
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares [b] === squares[c]){
        return squares[a];
    } 
  }
  return null;
}
