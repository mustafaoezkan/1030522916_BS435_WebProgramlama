import React from "react";

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catIndex: Math.floor(Math.random() * 3),
            state: undefined,
            card: ["img/ArkaKapak.png", "img/ArkaKapak.png", "img/ArkaKapak.png"],
            cardCounter: 0,
            gameOver: false

        }
    }

    chooseCat = (index) => {
        const { card, catIndex, cardCounter, gameOver } = this.state;

        if (!gameOver) {
            const newCard = [...card];
            let state;

            if (catIndex === index) {
                newCard[index] = "img/Kedi.jpg";
                state = "Kazandınız :)"
            } else {
                newCard[index] = "img/Kopek.jpg";
                if (cardCounter === 1) {
                    state = "Kaybettiniz :("
                }
            }
            this.setState({
                card: newCard,
                cardCounter: this.state.cardCounter + 1,
                state
            });

            if (state) {
                this.setState({
                    gameOver: true
                })
            }

        }
    }

    newGame = () => {
        this.setState({
            catIndex: Math.floor(Math.random() * 3),
            state: undefined,
            card: ["img/ArkaKapak.png", "img/ArkaKapak.png", "img/ArkaKapak.png"],
            cardCounter: 0,
            gameOver: false
        })
    }

    render() {
        const { card, state } = this.state;
        return (
            <div>
                <p className="info">Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte Kedi kartını bulamaz isen
                    2. seçim hakkı tanınacaktır.</p>
                <img className="card" src={card[0]} onClick={() => { this.chooseCat(0) }} />
                <img className="card" src={card[1]} onClick={() => { this.chooseCat(1) }} />
                <img className="card" src={card[2]} onClick={() => { this.chooseCat(2) }} />
                <div className="message">
                    <p>{state ? state : "If you want find cat card, you must click card."}</p>
                    {state && <p>
                        A new game ? <span onClick={this.newGame} className='link'>click</span> there.
                    </p>}
                </div>
            </div>
        );
    }
}