import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import useBookStats from '../hooks/useBookStats';
import '../App.css';

const Stats = () => {
  const { books } = useContext(BookContext);
  const { total, milik, baca, beli } = useBookStats(books);

  return (
    <div className="stats-container">
      <h1 className="text-center">Statistik Buku</h1>
      <ul className="stats-list">
        <li>Total Buku: <span>{total}</span></li>
        <li>Buku Milik: <span>{milik}</span></li>
        <li>Sedang Dibaca: <span>{baca}</span></li>
        <li>Ingin Dibeli: <span>{beli}</span></li>
      </ul>
    </div>
  );
};

export default Stats;
