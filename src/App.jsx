import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import Services from './components/Services';
import BookNow from './components/Book-now';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register';
import './assets/style/style.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;