import React, { createContext, useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBook] = useState([
    {title: 'Name of the Wind', author: 'Patric rothfuss', id: 1},
    {title: 'The Final Empire', author: 'Brandon Sanderson', id: 2},
  ])

  const addBook = (title, author) => {
    setBook([...books, {title, author, id: uuidv4()}])
  }
  const removeBook = (id) => {
    setBook(books.filter(book => book.id !== id));
  }
  return (
    <BookContext.Provider value={ {books, addBook, removeBook} }>
      { props.children }
    </BookContext.Provider>
  )
}

export default BookContextProvider;
