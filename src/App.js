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
      <div className="game-board">
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
