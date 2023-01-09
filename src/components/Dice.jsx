import "./Dice.css";

function Dice({ value, isHeld, id, holdDice }) {
  return (
    <h1
      className={isHeld ? "green" : ""}
      onClick={() => {
        holdDice(id);
      }}
    >
      {value}
    </h1>
  );
}

export default Dice;
