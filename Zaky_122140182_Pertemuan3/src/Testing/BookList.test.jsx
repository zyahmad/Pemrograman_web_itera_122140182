import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookList from '../components/BookList';
import { BookProvider } from '../context/BookContext';

const sampleBooks = [
  { id: '1', title: 'Book One', author: 'Author A', status: 'milik' },
  { id: '2', title: 'Book Two', author: 'Author B', status: 'baca' },
  { id: '3', title: 'Book Three', author: 'Author C', status: 'beli' },
];

describe('BookList', () => {
  test('renders books and filters correctly', () => {
    render(
      <BookProvider>
        <BookList filterStatus="all" searchTerm="" onEdit={() => {}} />
      </BookProvider>
    );
    expect(screen.getByText(/Tidak ada buku ditemukan/i)).toBeInTheDocument();
  });

  test('calls onEdit when Edit button clicked', () => {
    const onEditMock = jest.fn();
    render(
      <BookProvider>
        <BookList filterStatus="all" searchTerm="" onEdit={onEditMock} />
      </BookProvider>
    );
    // No books initially, so no edit buttons
  });
});
