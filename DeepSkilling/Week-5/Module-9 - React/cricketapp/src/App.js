import React from "react";
import ListofPlayers from "./ListofPlayers";
import Scorebelow70 from "./Scorebelow70";
import {
  OddPlayers,
  EvenPlayers,
  ListofIndianPlayers,
  IndianPlayers,
} from "./IndianPlayers";

function App() {

  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 80 },
    { name: "Ann", score: 90 },
    { name: "Elisabeth", score: 60 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 75 },
    { name: "Rahul", score: 65 }
  ];

  const flag = false;

  return (
    <div style={{ marginLeft: "20px" }}>

      <h1>List of Players</h1>
      <ListofPlayers players={players} />

      <hr />

      <h1>List of Players having Scores Less than 70</h1>
      <Scorebelow70 players={players} />

      <hr />

      {flag ? (
        <>
          <h1>Odd Players</h1>
          <OddPlayers IndianPlayers={IndianPlayers} />

          <h1>Even Players</h1>
          <EvenPlayers IndianPlayers={IndianPlayers} />
        </>
      ) : (
        <>
          <h1>List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </>
      )}

    </div>
  );
}

export default App;