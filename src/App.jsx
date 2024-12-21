import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FAQS from './pages/FAQs';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Consultation from './pages/Consultation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consultation" element={<Consultation />} />

        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/blog/:id" element={<BlogDetails />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
