import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import AddBook from './pages/AddBook'
import EditBook from './pages/EditBook'
import ViewBook from './pages/ViewBook'
import BookDetail from './pages/bookDetail'


function App() {

  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("Books");

    if (savedBooks) {
      return JSON.parse(savedBooks);
    } else {
      return [
        {
          b_id: 1,
          title: "मेरा बचपन",
          type: "Autobiography",
          author: "मैक्सिम गोर्की",
          price: 801,
          publisher: "Shubhda Prakashan",
          imageUrl:
            "https://ndl.education.gov.in/api/upload/bookscover/20260317102640book2.jpg",
          description:
            "यह पुस्तक लेखक के बचपन की स्मृतियों पर आधारित एक संवेदनशील आत्मकथात्मक रचना है। कहानी पारिवारिक स्नेह, विशेष रूप से नानी के स्नेह, ग्रामीण जीवन की कठिनाइयों और साधारण लोगों के संघर्ष को मार्मिक ढंग से प्रस्तुत करती है"
        }
      ];
    }
  });


  const addBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.b_id !== id));
  };

  useEffect(() => {
    localStorage.setItem("Books", JSON.stringify(books));
  }, [books]);

  const updateBook = (updatedBook) => {
    setBooks(
      books.map((book) =>
        book.b_id === updatedBook.b_id ? updatedBook : book
      )
    );
  };

  return (
    <>
      <Navigation />

      <Routes>

        <Route path="/" element={<Home books={books} />} />

        <Route
          path="/add"
          element={<AddBook addBook={addBook} books={books} />}
        />

        <Route path="/view/:id" element={<BookDetail books={books} />} />

        <Route
          path="/viewBook"
          element={<ViewBook books={books} deleteBook={deleteBook} />}
        />

        <Route
          path="/editBook/:id"
          element={<EditBook books={books} updateBook={updateBook} />}
        />

      </Routes>
    </>
  )
}

export default App
