import "./App.css";
import Dice from "./components/Dice";

function App() {
  return (
    <main className="game-container">
      <div className="game-board">
        <div className="dice-container">
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
        </div>
      </div>
    </main>
  );
}

export default App;
