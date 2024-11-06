import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Home from './components/Home';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />      
        <Route path='/contact' element={<Contact />} />
  
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
