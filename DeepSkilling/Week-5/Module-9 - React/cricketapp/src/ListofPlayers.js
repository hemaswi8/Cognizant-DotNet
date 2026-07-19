import React from "react";

export default function ListofPlayers(props) {
    return (
        <>
            {props.players.map((item) => (
                <div key={item.name}>
                    <li>
                        Mr. {item.name} <span>{item.score}</span>
                    </li>
                </div>
            ))}
        </>
    );
}