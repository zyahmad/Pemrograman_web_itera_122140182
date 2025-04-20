import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { BookContext } from '../context/BookContext';
import '../App.css';

const initialFormState = { id: null, title: '', author: '', status: 'milik' };

const BookForm = ({ currentBook, clearCurrent }) => {
  const {addBook, updateBook } = useContext(BookContext);
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (currentBook) {
      setFormData(currentBook);
    } else {
      setFormData(initialFormState);
    }
  }, [currentBook]);

  const validate = () => {
    const errs = {};
    if (!formData.title.trim()) errs.title = 'Judul buku wajib diisi';
    if (!formData.author.trim()) errs.author = 'Penulis wajib diisi';
    if (!['milik', 'baca', 'beli'].includes(formData.status)) errs.status = 'Status tidak valid';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (formData.id) {
      updateBook(formData);
    } else {
      addBook({ ...formData, id: Date.now().toString() });
    }
    setFormData(initialFormState);
    clearCurrent();
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div className="form-group">
        <label htmlFor="title">Judul Buku</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <p className="error-text">{errors.title}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="author">Penulis</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
        {errors.author && <p className="error-text">{errors.author}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="milik">Milik</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
        {errors.status && <p className="error-text">{errors.status}</p>}
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {formData.id ? 'Update Buku' : 'Tambah Buku'}
        </button>
        {formData.id && (
          <button
            type="button"
            onClick={() => {
              setFormData(initialFormState);
              clearCurrent();
              setErrors({});
            }}
            className="btn-secondary"
          >
            Batal
          </button>
        )}
      </div>
    </form>
  );
};

BookForm.propTypes = {
  currentBook: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.oneOf(['milik', 'baca', 'beli']),
  }),
  clearCurrent: PropTypes.func.isRequired,
};

BookForm.defaultProps = {
  currentBook: null,
};

export default BookForm;
