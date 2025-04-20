import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const BookFilter = ({ filterStatus, setFilterStatus, searchTerm, setSearchTerm }) => {
  return (
    <div className="book-filter">
      <div>
        <label htmlFor="statusFilter">Filter Status:</label>
        <select
          id="statusFilter"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">Semua</option>
          <option value="milik">Milik</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
      </div>
      <div>
        <label htmlFor="searchInput">Cari Buku:</label>
        <input
          id="searchInput"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Judul atau penulis"
        />
      </div>
    </div>
  );
};

BookFilter.propTypes = {
  filterStatus: PropTypes.oneOf(['all', 'milik', 'baca', 'beli']).isRequired,
  setFilterStatus: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default BookFilter;