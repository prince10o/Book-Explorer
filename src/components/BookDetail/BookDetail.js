import React, { useState } from "react";

const BookDetail = ({ book }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="book-detail">
      <img
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}
      />
      <h2 className="book-title">{book.volumeInfo.title}</h2>
      <div className="book-author">
        <p>Author: {book.volumeInfo.authors.join(", ")}</p>{" "}
      </div>
      <p className="book-rating">
        {book.rating}Rating: {book.volumeInfo.averageRating}
      </p>
      {showMore && (
        <p>
          <b>Description: {book.volumeInfo.description}</b>
        </p>
      )}
      <button className="show-more-btn" onClick={handleShowMore}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default BookDetail;
