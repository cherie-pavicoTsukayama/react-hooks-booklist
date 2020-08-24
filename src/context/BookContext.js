import React, { createContext, useState, useReducer } from 'react';
import {v4 as uuidv4} from 'uuid';
import bookReducer from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [])

  // const addBook = (title, author) => {
  //   setBook([...books, {title, author, id: uuidv4()}])
  // }
  // const removeBook = (id) => {
  //   setBook(books.filter(book => book.id !== id));
  // }
  return (
    <BookContext.Provider value={ {books, dispatch} }>
      { props.children }
    </BookContext.Provider>
  )
}

export default BookContextProvider;
