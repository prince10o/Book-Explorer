import React from "react";
import BookDetail from "../BookDetail/BookDetail";

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookDetail key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
