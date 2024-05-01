import React, { Component } from "react";
import "./style.css";
import Board from "./Board";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </div>
    );
  }
}
