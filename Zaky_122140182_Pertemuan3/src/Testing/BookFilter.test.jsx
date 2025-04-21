import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookFilter from '../components/BookFilter';

describe('BookFilter', () => {
  test('renders filter and search inputs', () => {
    const setFilterStatus = jest.fn();
    const setSearchTerm = jest.fn();
    render(
      <BookFilter
        filterStatus="all"
        setFilterStatus={setFilterStatus}
        searchTerm=""
        setSearchTerm={setSearchTerm}
      />
    );
    expect(screen.getByLabelText(/Filter Status/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Cari Buku/i)).toBeInTheDocument();
  });

  test('calls setFilterStatus on change', () => {
    const setFilterStatus = jest.fn();
    const setSearchTerm = jest.fn();
    render(
      <BookFilter
        filterStatus="all"
        setFilterStatus={setFilterStatus}
        searchTerm=""
        setSearchTerm={setSearchTerm}
      />
    );
    fireEvent.change(screen.getByLabelText(/Filter Status/i), { target: { value: 'milik' } });
    expect(setFilterStatus).toHaveBeenCalledWith('milik');
  });

  test('calls setSearchTerm on change', () => {
    const setFilterStatus = jest.fn();
    const setSearchTerm = jest.fn();
    render(
      <BookFilter
        filterStatus="all"
        setFilterStatus={setFilterStatus}
        searchTerm=""
        setSearchTerm={setSearchTerm}
      />
    );
    fireEvent.change(screen.getByLabelText(/Cari Buku/i), { target: { value: 'test' } });
    expect(setSearchTerm).toHaveBeenCalledWith('test');
  });
});
