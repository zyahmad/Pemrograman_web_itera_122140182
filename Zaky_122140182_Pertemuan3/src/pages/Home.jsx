import React, { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import BookFilter from '../components/BookFilter';
import '../App.css';

const Home = () => {
  const [filterStatus, setFilterStatus] = React.useState('all');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [currentBook, setCurrentBook] = React.useState(null);

  const clearCurrent = () => setCurrentBook(null);

  return (
    <div className="home-container">
      <h1 className="text-center">Manajemen Buku Pribadi</h1>
      <BookForm currentBook={currentBook} clearCurrent={clearCurrent} />
      <BookFilter
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <BookList
        filterStatus={filterStatus}
        searchTerm={searchTerm}
        onEdit={setCurrentBook}
      />
    </div>
  );
};

export default Home;
