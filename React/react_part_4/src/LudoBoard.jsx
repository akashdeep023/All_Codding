import { useState } from "react";

export default function LudoBoard() {
  // let [blueMove,setBlueMove] = useState(0)
  // let [yellowMove,setYellowMove] = useState(0)
  // let [greenMove,setGreenMove] = useState(0)
  // let [redMove, setRedMove] = useState(0)
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 }); //create a object in State
  let [arr, setArr] = useState(["no-moves "]); //create a array in State
  let updateBlue = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: moves.blue + 1 }; //pass obj copy in spread method and update blue key value
    });
    setArr((prevArr) => {
      return [...prevArr, "blue-moves "];
    });
  };
  let updateYellow = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: moves.yellow + 1 };
    });
  };
  let updateGreen = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, green: moves.green + 1 };
    });
  };
  let updateRed = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, red: moves.red + 1 };
    });
  };
  return (
    <div>
      <h4>Game Begins</h4>
      <div className="board">
              <p>Blue moves = {moves.blue}</p>
              <p>{arr}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
