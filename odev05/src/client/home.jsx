import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
        <h2>Find the Cat</h2>
        <p className="welcome-text">
          You have to find the cat card in 3 closed cards. You have 2 rights to
          find the cat card.
        </p>
        <div className="action">
          <Link className="play" to={"/Game"}>
            Play
          </Link>
        </div>
      </div>
    );
  }
}
