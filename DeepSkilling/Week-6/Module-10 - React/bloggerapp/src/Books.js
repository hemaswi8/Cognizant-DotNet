import React from "react";
import { books } from "./Data";

function Books() {
  return (
    <div>
      <h1>Book Details</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.name}</h3>
            <h4>{book.price}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;