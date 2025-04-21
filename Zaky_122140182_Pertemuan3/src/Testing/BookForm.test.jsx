import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from '../components/BookForm';
import { BookProvider } from '../context/BookContext';

describe('BookForm', () => {
  test('renders form inputs and buttons', () => {
    render(
      <BookProvider>
        <BookForm clearCurrent={() => {}} />
      </BookProvider>
    );
    expect(screen.getByLabelText(/Judul Buku/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Penulis/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Tambah Buku/i })).toBeInTheDocument();
  });

  test('shows validation errors on empty submit', () => {
    render(
      <BookProvider>
        <BookForm clearCurrent={() => {}} />
      </BookProvider>
    );
    fireEvent.click(screen.getByRole('button', { name: /Tambah Buku/i }));
    expect(screen.getByText(/Judul buku wajib diisi/i)).toBeInTheDocument();
    expect(screen.getByText(/Penulis wajib diisi/i)).toBeInTheDocument();
  });

  test('calls addBook on valid submit', () => {
    const { container } = render(
      <BookProvider>
        <BookForm clearCurrent={() => {}} />
      </BookProvider>
    );
    fireEvent.change(screen.getByLabelText(/Judul Buku/i), { target: { value: 'Test Book' } });
    fireEvent.change(screen.getByLabelText(/Penulis/i), { target: { value: 'Author' } });
    fireEvent.click(screen.getByRole('button', { name: /Tambah Buku/i }));
    expect(container.querySelector('input[name="title"]').value).toBe('');
  });
});