import React from "react";
import ReactDOM from "react-dom";

import { chooseRandomNumber, newPuzzle, isClickedCounter, clickedImg0, clickedImg1, clickedImg2, refreshPage } from './puzzle';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    componentDidUpdate() {
    }

    render() {
        return (
            <>
                <button onClick={() => { chooseRandomNumber(); }}>Başla</button>
                <div className="puzzleDivId">
                    <img id="img0" style={{ display: 'none' }} className="card" src="https://i.hizliresim.com/gm1i5tw.jpg" onClick={() => { isClickedCounter(); clickedImg0(); }} />
                    <img id="img1" style={{ display: 'none' }} className="card" src="https://i.hizliresim.com/gm1i5tw.jpg" onClick={() => { isClickedCounter(); clickedImg1(); }} />
                    <img id="img2" style={{ display: 'none' }} className="card" src="https://i.hizliresim.com/gm1i5tw.jpg" onClick={() => { isClickedCounter(); clickedImg2(); }} />
                </div>
                <div className="message">
                    <p style={{ display: 'none' }} id="areaId">If you want to find cat, you must click card.</p>
                </div>
            </>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));