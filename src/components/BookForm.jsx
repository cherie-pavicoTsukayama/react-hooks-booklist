import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle('');
        setAuthor('');
  }
  return (
    <form onSubmit={handleSubmit} action="submit">
      <input
        onChange={ (e) => setTitle(e.target.value) }
        type="text"
        name="title"
        placeholder="Book Title"
        value={ title }
        required
      />
      <input
        onChange={ (e) => setAuthor(e.target.value) }
        type="text"
        name="author"
        placeholder='Book Author'
        value={ author }
        required
      />
      <div>
       <input type="submit" value="Add Book"/>
      </div>
    </form>
  )
}

export default BookForm;
