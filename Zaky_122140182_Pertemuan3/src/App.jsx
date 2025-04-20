import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import Home from './pages/Home';
import Stats from './pages/Stats';
import './App.css';

const App = () => {
  return (
    <BookProvider>
      <Router>
        <div>
          <nav className="navbar">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              Statistik
            </NavLink>
          </nav>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stats" element={<Stats />} />
            </Routes>
          </main>
        </div>
      </Router>
    </BookProvider>
  );
};

export default App;
