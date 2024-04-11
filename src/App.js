import React, { useState, useEffect } from "react";
import axios from "axios";
import BookList from "./components/BookList/BookList";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: "subject:fiction",
            maxResults: 10,
          },
        }
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.volumeInfo.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <BookList books={filteredBooks} />
    </div>
  );
}

export default App;
