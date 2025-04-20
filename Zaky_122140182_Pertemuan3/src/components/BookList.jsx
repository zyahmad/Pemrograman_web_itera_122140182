import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { BookContext } from '../context/BookContext';
import '../App.css';

const BookList = ({ filterStatus, searchTerm, onEdit }) => {
  const { books, deleteBook } = useContext(BookContext);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  const filteredBooks = books.filter(book => {
    const matchesStatus = filterStatus === 'all' || book.status === filterStatus;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleDelete = (id) => {
    if (confirmDeleteId === id) {
      deleteBook(id);
      setConfirmDeleteId(null);
    } else {
      setConfirmDeleteId(id);
    }
  };

  return (
    <div className="book-list">
      {filteredBooks.length === 0 ? (
        <p className="text-center">Tidak ada buku ditemukan.</p>
      ) : (
        <ul>
          {filteredBooks.map(book => (
            <li key={book.id}>
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>Penulis: {book.author}</p>
                <p className="status">Status: {book.status}</p>
              </div>
              <div className="actions">
                <button
                  onClick={() => onEdit(book)}
                  aria-label={`Edit ${book.title}`}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(book.id)}
                  className="btn-delete"
                  aria-label={`Delete ${book.title}`}
                >
                  {confirmDeleteId === book.id ? 'Konfirmasi Hapus' : 'Hapus'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

BookList.propTypes = {
  filterStatus: PropTypes.oneOf(['all', 'milik', 'baca', 'beli']).isRequired,
  searchTerm: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default BookList;
