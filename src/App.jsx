import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Blogs from './Pages/Blogs.jsx';
import './reset.css';


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blogs />} />
            </Routes>
        </Router>
    );
}

export default App;
