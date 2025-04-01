import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

function App() {
    return (
        <Router>
        <div className="app-container">
            <Header />
            <Routes>
            <Route path="/" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            </Routes>
            <Footer />
        </div>
        </Router>
    );
}

export default App;