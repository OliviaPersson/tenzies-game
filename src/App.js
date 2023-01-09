import React from "react";
import Dice from "./components/Dice";
import Confetti from "react-confetti";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    console.log(dice[0].value);
    if (dice.every((die) => die.value === dice[0].value && die.isHeld)) {
      setTenzies(true);
      console.log("Completed");
    }
  }, [dice]);

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: uuidv4(),
      });
    }
    return newDice;
  }

  function handleRollDice() {
    if (tenzies) {
      newGame();
    } else {
      setDice((preDice) =>
        preDice.map((dice) =>
          !dice.isHeld
            ? {
                ...dice,
                value: Math.ceil(Math.random() * 6),
              }
            : dice
        )
      );
    }
  }

  function newGame() {
    setTenzies(false);
    setDice(allNewDice());
  }

  function holdDice(id) {
    setDice((preDice) =>
      preDice.map((dice) =>
        dice.id === id
          ? {
              ...dice,
              isHeld: !dice.isHeld,
            }
          : dice
      )
    );
  }

  return (
    <main className="game-container">
      {tenzies && <Confetti width={360} />}
      <div className="game-board">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">
          {dice.map((dice) => (
            <Dice
              key={dice.id}
              value={dice.value}
              isHeld={dice.isHeld}
              holdDice={holdDice}
              id={dice.id}
            />
          ))}
        </div>
        <button onClick={handleRollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>
      </div>
    </main>
  );
}

export default App;
