import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FAQS from './pages/FAQs';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Consultation from './pages/Consultation';
import DrAi from './pages/DrAi';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<FAQS />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/dr-ai" element={<DrAi />} />

        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/blog/:id" element={<BlogDetails />} /> */}

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
