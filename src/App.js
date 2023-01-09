import React from "react";
import Dice from "./components/Dice";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [dice, setDice] = React.useState(allNewDice());

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
        <button onClick={handleRollDice}>Roll</button>
      </div>
    </main>
  );
}

export default App;
