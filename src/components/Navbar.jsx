import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar container">
      <h1 className="nav-title">
        Ninja Reading List
      </h1>
      <p className="nav-subheader">Currently You have { books.length } books to get through...</p>
    </div>
  )
}

export default Navbar;
