import React from "react";

const estil = {
  textAlign: "left",
  marginLeft: "80px",
};

const ListBooks = ({ books }) => (
  <ol style={estil}>
    {books.map((book) => (
      <li key={book.id}>
        <ul>
          <li>Title: {book.title}</li>
          <li>Author: {book.author}</li>
          <li>Weeks: {book.weeksOnList}</li>
          <br></br>
        </ul>
      </li>
    ))}
  </ol>
);

export default ListBooks;
