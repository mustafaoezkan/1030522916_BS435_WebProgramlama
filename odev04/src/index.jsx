import React from "react";
import ReactDOM from "react-dom";

import { Game } from "./Game";

export const App = () => {
    return (
        <Game />
    );
};
ReactDOM.render(<App />, document.getElementById("root"));

