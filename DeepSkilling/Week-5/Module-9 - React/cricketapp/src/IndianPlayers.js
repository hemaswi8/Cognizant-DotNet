import React from "react";

export function OddPlayers({ IndianPlayers }) {
  const oddPlayers = IndianPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      {oddPlayers.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </div>
  );
}

export function EvenPlayers({ IndianPlayers }) {
  const evenPlayers = IndianPlayers.filter((_, index) => index % 2 !== 0);

  return (
    <div>
      {evenPlayers.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </div>
  );
}

const T20Players = ["Sachin1", "Dhoni2", "Virat3"];
const RanjiPlayers = ["Rohit4", "Raina5", "Yuvaraj6"];

export const IndianPlayers = [...T20Players, ...RanjiPlayers];

export function ListofIndianPlayers({ IndianPlayers }) {
  return (
    <div>
      {IndianPlayers.map((player, index) => (
        <li key={index}>Mr. {player}</li>
      ))}
    </div>
  );
}