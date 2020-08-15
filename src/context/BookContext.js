import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBook] = useState([
    {title: 'Name of the Wind', author: 'Patric rothfuss', id: 1},
    {title: 'The Final Empire', author: 'Brandon Sanderson', id: 1},
  ])

  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuidv4()}])
  }
}
